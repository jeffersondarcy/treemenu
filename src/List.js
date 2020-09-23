import React from 'react';
import PropTypes from 'prop-types';

const getMockItems = () => Array(20).fill().map((_, i) => `item-${i+1}`);
const List = ({items}) => {

return <>
    {getMockItems().map(item =><div>{item}</div>)}
    </>
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default List;