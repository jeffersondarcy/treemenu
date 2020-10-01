import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Expand from "./Expand";
import List from "./List";
import {getChildren} from "./functions";

import './ListItem.scss'

const ListItem = (props) => {
    const [expanded, setExpanded] = useState(false);
    const toggle = () => {
        setExpanded(!expanded);
    }

    return (
        <div style={props.style}>
            <div className="ListItem">
                {props.hasChildren
                    ? <Expand onClick={toggle} expanded={expanded}/>
                    : <div className="Spacer"/>}
                <div>{props.name}</div>
            </div>
            {expanded && (
                <div style={{paddingLeft:200}}>
                <List items={getChildren(props.id)}/>
                </div>
                )}
        </div>
    )
}

export const ItemInterface = PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        hasChildren: PropTypes.bool,
    }
).isRequired

ListItem.propTypes = {
    ...ItemInterface,
    style: PropTypes.object
}

export default ListItem