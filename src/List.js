import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import TreeContext from "./TreeContext";
import {expandToNode, getFlatTree} from "./functions";
import GoTo from "./GoTo";

const List = () => {
    const [goto, setGoto] = useState(null)
    const [limit, setLimit] = useState(20)
    const [tree, setTree] = useContext(TreeContext)

    useEffect(() => {
        if(!goto) return
        const el = document.getElementById(goto)
        if(!el) return
        el.scrollIntoView()
    }, [goto]);

    const flatTree = getFlatTree(tree, { limit, goto })
    const next = () => setLimit(limit + 20)

    const renderItems = () => (
        flatTree.map((nodeId, index) => (
            <ListItem
                highlighted={nodeId===goto}
                key={index}
                id={nodeId}
            />)
        )
    )

    const goToNode = (nodeId) => {
        setGoto(nodeId)
        expandToNode(nodeId, tree, setTree)
    }

    return (
        <div>
            <GoTo handle={goToNode}/>
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