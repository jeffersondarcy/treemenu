import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import Expand from "./Expand";
import List from "./List";
import { maxListLength } from './settings';
import {getChildren} from "./functions";

import './ListItem.scss'
import TreeContext from "./TreeContext";

const style = {
    border: "1px solid green",
    margin: 6,
    padding: 8,
    height: 30
};

const ListItem = ({id}) => {
    const [tree, setTree] = useContext(TreeContext)

    if (!tree.has(id)) return null

    const self = tree.get(id)

    const toggle = () => {
        //setExpanded(!expanded);
    }

    // const children = expanded ? getChildren(props.id) : []

    return (
        <div style={style}>
            <div className="ListItem">
                {self.hasChildren
                    ? <Expand onClick={toggle} expanded={self.expanded}/>
                    : <div className="Spacer"/>}
                <div>{self.name}</div>
            </div>
        </div>
    )
}

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
}

export default ListItem