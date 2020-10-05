import {produce} from "immer"

const getTreeWithMockChildren = (count, nodeId, tree) => {
    if(!tree.has(nodeId)) return tree
    const node = tree.get(nodeId)
    node.hasChildren = true
    node.children = []
    node.expanded = true

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

export const getMockTreeRoot = () =>
    getTreeWithMockChildren(100, 'root',
        new Map().set('root', {
            name: 'root',
            expanded: true,
            level: 0,
            children: []
        }))

const expand = (nodeId, tree, setTree) => {
    setTree(produce(tree, newTree => {
        const node = newTree.get(nodeId)
        node.expanded = true
        newTree.set(nodeId, node)
        if (node.children && node.children.length) {
            return newTree
        }

        return getTreeWithMockChildren(Math.floor(Math.random() * 100), nodeId, newTree)
    }))
}

const collapse = (nodeId, tree, setTree) => {
    setTree(produce(tree, newTree => {
        const node = newTree.get(nodeId)
        node.expanded = false
        newTree.set(nodeId, node)
    }))
}

export const toggle = (nodeId, tree, setTree) => {
    if(!tree.has(nodeId)) return
    const node = tree.get(nodeId)
    if (node.expanded) return collapse(nodeId, tree, setTree)
    return expand(nodeId, tree, setTree)
}

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