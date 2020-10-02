import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Expand from "./Expand";
import List from "./List";
import {getChildren} from "./functions";

import './ListItem.scss'

const style = {
    border: "1px solid green",
    margin: 6,
    padding: 8
};

const ListItem = (props) => {
    const [expanded, setExpanded] = useState(false);
    const toggle = () => {
        setExpanded(!expanded);
    }
    const height = expanded ? 800 : 30

    return (
        <div style={{...style, height}}>
            <div className="ListItem">
                {props.hasChildren
                    ? <Expand onClick={toggle} expanded={expanded}/>
                    : <div className="Spacer"/>}
                <div>{props.name}</div>
            </div>
            {expanded && (
                <div style={{position: 'absolute'}}>
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

ListItem.propTypes = ItemInterface

export default ListItem