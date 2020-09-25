export const getChildren = async (itemId) => {
    await setTimeout(() => {}, 2000);
    return getMockItems()
}

const getMockItems = (count, parentId) => Array(count).fill().map((_, i) => `item-${parentId}-${i}`);

const getListItemChildren = id => {
    const childrenCount = Math.floor(Math.random() * 100);

}