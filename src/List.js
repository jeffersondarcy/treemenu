import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import TreeContext from "./TreeContext";
import {getFlatTree} from "./functions";
import GoTo from "./GoTo";

const List = ({goto}) => {
    const [limit, setLimit] = useState(20)
    const [tree] = useContext(TreeContext)
    const flatTree = getFlatTree(tree, { limit, goto })
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
            <GoTo />
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

List.propTypes = {
    goto: PropTypes.string,
}

export default List;