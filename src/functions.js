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
            parent: nodeId,
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

export const expandToNode = (nodeId, tree, setTree) => {
    if(!tree.has(nodeId)) {
        alert(`${nodeId} does not exist`)
        return
    }
    let node = tree.get(nodeId)
    setTree(produce(tree, newTree => {
        while (node.parent != 'root')
        {
            const id = node.parent
            node = tree.get(id)
            node.expanded = true
            newTree.set(id, node)
        }
    }))
}

const hasChildren = node => node.expanded && node.hasChildren && node.children

const appendChildren = (tree, flatTree, children, options) => {
    const shouldStop = (childId) => {
        if (options.limit > flatTree.length) return false
        if (!options.goto) return true
        if (childId === options.goto) return true
    }
    for (const childId of children) {
        flatTree.push(childId)
        if (shouldStop(childId)) return
        const child = tree.get(childId)
        if (hasChildren(child)) appendChildren(tree, flatTree, child.children, options)
    }
}

export const getFlatTree = (tree, options) => {
    const root = tree.get('root')
    const flatTree = []
    appendChildren(tree, flatTree, root.children, options)
    return flatTree
}