import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Expand from "./Expand";
import List from "./List";
import {getChildren} from "./functions";

const ListItem = (props) => {
    const [expanded, setExpanded] = useState(false);
    const toggle = () => {
        console.log(expanded);
        setExpanded(!expanded);
    }

    return (
        <>
            {props.hasChildren && <Expand onClick={toggle} expanded={expanded}/>}
            <div>{props.name}</div>
            {expanded && <List items={getChildren(props.id)}/>}
        </>
    )
}

export const ItemInterface = PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        hasChildren: PropTypes.bool
    }
).isRequired

ListItem.propTypes = ItemInterface

export default ListItem