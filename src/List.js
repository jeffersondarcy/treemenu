import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import ListItem, {ItemInterface} from "./ListItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import TreeContext from "./TreeContext";

const List = () => {
    const [limit, setLimit] = useState(20)
    const tree = useContext(TreeContext)
    const next = () => setLimit(limit + 20)

    const renderItems = () => (
        items.slice(0, limit).map((item, index) => (
            <ListItem
                style
                key={index}
                name={item.name}
                id={item.id}
                hasChildren={item.hasChildren}
                 />)
        )
    )

    return (
        <div>
            <InfiniteScroll
                dataLength={limit}
                hasMore={limit < items.length}
                next={next}
            >
                {renderItems()}
            </InfiniteScroll>
        </div>
    )
}

export default List;