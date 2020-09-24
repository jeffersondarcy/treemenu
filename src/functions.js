export const getChildren = async (itemId) => {
    await setTimeout(() => {}, 2000);
    return getMockItems()
}

const getMockItems = () => Array(20).fill().map((_, i) => `item-${i+1}`);