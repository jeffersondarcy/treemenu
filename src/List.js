import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ListItem, {ItemInterface} from "./ListItem";
import InfiniteScroll from 'react-infinite-scroll-component';

const List = ({items, className}) => {
    const [limit, setLimit] = useState(20);
    const next = () => setLimit(limit + 20);
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

List.propTypes = {
    items: PropTypes.arrayOf(ItemInterface).isRequired,
    className: PropTypes.string,
}

export default List;