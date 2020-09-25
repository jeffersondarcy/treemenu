import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Expand from "./Expand";
import List from "./List";

const ListItem = (props) => {
const [expanded, setExpanded] = useState(false);
const toggle = () => setExpanded(!expanded);

const renderChildren = () => null

return <>
    {props.hasChildren && <Expand toggle={toggle} expanded={expanded} />}
    <div>{props.name}</div>
    {renderChildren()}
    </>
}

export const ItemInterface = PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        hasChildren: PropTypes.bool
    }
)

ListItem.propTypes = ItemInterface


export default ListItem