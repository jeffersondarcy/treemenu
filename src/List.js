import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as ScrollableList } from 'react-window';
import ListItem, {ItemInterface} from "./ListItem";

const List = ({items}) => {

    return (
    <ScrollableList height={300} itemCount={items.length} itemSize={20} width={200}>
        {({ index, style }) => (
            <ListItem
                name={items[index].name}
                id={items[index].id}
                hasChildren={items[index].hasChildren}
                style={style} />
        )}
    </ScrollableList>)
}

List.propTypes = {
    items: PropTypes.arrayOf(ItemInterface).isRequired,
}

export default List;