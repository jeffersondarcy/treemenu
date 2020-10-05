import {produce} from "immer"

const getTreeWithMockChildren = (count, nodeId, tree) => {
    if(!tree.has(nodeId)) return tree
    const node = tree.get(nodeId)
    node.hasChildren = true
    node.children = []

    const childLevel = node.level + 1
    const getName = (id) => `item${nodeId !== 'root' ? '-' + nodeId : ''}-${id}`

    for(let i=0; i<count; i++) {
        const id = getName(i)
        node.children.push(id)

        const child = {
            name: id,
            level: childLevel,
            expanded: false,
            hasChildren: Math.random() >= 0.5,
        }

        tree.set(id, child)
    }

    return tree
}

const getTreeWithMockChildrenImmutable = (count, nodeId, tree) =>
    produce(tree, newTree =>
        getTreeWithMockChildren(count, nodeId, newTree))

export const getMockTreeRoot = () =>
    getTreeWithMockChildren(100, 'root',
        new Map().set('root', {
            name: 'root',
            expanded: true,
            level: 0,
            children: []
        }))

/*
export const getChildren = (nodeId, tree) => {
    if (!tree.has(nodeId)) return null
    const node = tree.get(nodeId)
    if (!node.hasOwnProperty('children')) {

        store.set(parentId, getMockItems(Math.floor(Math.random() * 100), parentId))
    }

    return store.get(parentId)
}
 */

const hasChildren = node => node.expanded && node.hasChildren && node.children

const appendChildren = (tree, flatTree, children, limit) => {
    for (const childId of children) {
        flatTree.push(childId)
        if (flatTree.length >= limit) return
        const child = tree.get(childId)
        if (hasChildren(child)) appendChildren(tree, flatTree, child.children, limit)
    }
}

export const getFlatTree = (tree, limit) => {
    const root = tree.get('root')
    const flatTree = []
    appendChildren(tree, flatTree, root.children, limit)
    return flatTree
}