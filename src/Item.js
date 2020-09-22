import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Item({name, children}) {
const [expanded, setExpanded] = useState(false);
const toggle = () => setExpanded(!expanded);

return
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
        ])
    ),
}