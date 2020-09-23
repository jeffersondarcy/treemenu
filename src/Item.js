import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Expand from "./Expand";

const Item = ({name, children}) => {
const [expanded, setExpanded] = useState(false);
const toggle = () => setExpanded(!expanded);
const hasChildren = () => children && children.length;

const renderChildren = () => {
    if (hasChildren()) {
        return children.map((child) => <Item name={child.name} children={child.children}/>)
    }
}

return <>
    {hasChildren() && <Expand toggle={toggle} expanded={expanded} />}
    <div>{name}</div>
    {renderChildren()}
    </>
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    expand: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.object),
}