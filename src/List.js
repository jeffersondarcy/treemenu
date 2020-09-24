import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as ScrollableList } from 'react-window';

const getMockItems = () => Array(20).fill().map((_, i) => `item-${i+1}`);
const List = ({items}) => {

    return <ScrollableList height={200} itemCount={100} itemSize={20} width={200}>
        {({ index, style }) => (
            <div style={style}>
                Item {index}
            </div>
        )}
    </ScrollableList>
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default List;