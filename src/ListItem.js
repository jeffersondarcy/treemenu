import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import Expand from "./Expand";

import './ListItem.scss'
import TreeContext from "./TreeContext";
import {toggle} from "./functions";

const style = {
    border: "1px solid",
    margin: 6,
    padding: 8,
    height: 30
};

const ListItem = ({id, highlighted}) => {
    const [tree, setTree] = useContext(TreeContext)
    const [color, setColor] = useState(['green'])

    if (!tree.has(id)) return null

    const self = tree.get(id)

    const onToggle = (Event) => {
        Event.stopPropagation()
        toggle(id, tree, setTree)
    }
    const changeColor = () => {
        const colors = ['green', 'blue', 'yellow', 'red', 'black']
        setColor(colors[Math.floor(Math.random() * 5)])
    }

    return (
        <div id={id} style={{
            ...style,
            marginLeft: style.margin + 30*(self.level-1),
            backgroundColor: highlighted ? 'grey' : null,
            borderColor: color,
            }}
            onClick={changeColor}
        >
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
    highlighted: PropTypes.bool,
}

export default ListItem