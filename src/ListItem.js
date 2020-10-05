import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Expand from "./Expand";

import './ListItem.scss'
import TreeContext from "./TreeContext";
import {toggle} from "./functions";

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

    const onToggle = () => toggle(id, tree, setTree)

    // const children = expanded ? getChildren(props.id) : []

    return (
        <div style={{...style, marginLeft: style.margin + 30*(self.level-1)}}>
            <div className="ListItem">
                {self.hasChildren
                    ? <Expand onClick={onToggle} expanded={self.expanded}/>
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