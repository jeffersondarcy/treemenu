import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Expand from "./Expand";
import List from "./List";
import { maxListLength } from './settings';
import {getChildren} from "./functions";

import './ListItem.scss'

const style = {
    border: "1px solid green",
    margin: 6,
    padding: 8,
    height: 30
};

const ListItem = (props) => {
    const [expanded, setExpanded] = useState(false);
    const toggle = () => {
        setExpanded(!expanded);
    }

    const children = expanded ? getChildren(props.id) : []

    const getListHeight = () => {
        const length = children.length < maxListLength ? children.length : maxListLength
        return (style.height + 2 * style.margin) * ( length + 1 )
}

    return (
        <div style={{...style, height: getListHeight()}}>
            <div className="ListItem">
                {props.hasChildren
                    ? <Expand onClick={toggle} expanded={expanded}/>
                    : <div className="Spacer"/>}
                <div>{props.name}</div>
            </div>
            {expanded && (
                <div style={{marginLeft: 80, marginTop: style.height}}>
                <List items={children}/>
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