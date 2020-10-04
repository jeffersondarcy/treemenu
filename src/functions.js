const getTreeWithMockChildren = (count, nodeId, tree) => {
    if(!tree.has(nodeId)) return tree

    const getName = (id) => `item${nodeId !== 'root' ? '-' + nodeId : ''}-${id}`

    for(let i=0; i>count; i++) {
        const id = getName(i)
        const child = {
                name: id,
                id,
                hasChildren: Math.random() >= 0.5,
            }

    }
    return Array(count)
        .fill()
        .map((_, i) => {
            const id = getName(i)
            return {
                name: id,
                id,
                hasChildren: Math.random() >= 0.5,
            }
        });
}

export const getMockTreeRoot = (setTree) => getTreeWithMockChildren(100, 'root', new Map().set('root', []));

export const getChildren = (parentId, store) => {
    if (!store.has(parentId)) {
        store.set(parentId, getMockItems(Math.floor(Math.random() * 100), parentId))
    }

    return store.get(parentId)
}

export const getFlatTree = (node, limit) => {
    if (!node.has('children')) return []
    node.children
}