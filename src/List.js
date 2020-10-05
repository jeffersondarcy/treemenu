import React, {useContext, useState} from 'react';
import ListItem from "./ListItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import TreeContext from "./TreeContext";
import {getFlatTree} from "./functions";

const List = () => {
    const [limit, setLimit] = useState(20)
    const [tree] = useContext(TreeContext)
    const flatTree = getFlatTree(tree, limit)
    const next = () => setLimit(limit + 20)

    const renderItems = () => (
        flatTree.map((nodeId, index) => (
            <ListItem
                key={index}
                id={nodeId}
            />)
        )
    )

    return (
        <div>
            <InfiniteScroll
                dataLength={limit}
                hasMore={true}
                next={next}
            >
                {renderItems()}
            </InfiniteScroll>
        </div>
    )
}

export default List;