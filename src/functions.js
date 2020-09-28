const getMockItems = (count, parentId) => {
    const getName = (id) => `item${parentId? '-' + parentId : ''}-${id}`
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

export const getRootItems = () => getMockItems(100, null);

const store = new Map()
export const getChildren = (parentId) => {
    if (!store.has(parentId)) {
        store.set(parentId, getMockItems(Math.floor(Math.random() * 100), parentId))
    }

    return store.get(parentId)
}