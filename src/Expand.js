import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.scss'

function Expand({expanded, onClick}) {

    return (
        <div className="Expand" onClick={onClick}>
            ({expanded ? '-' : '+'})
        </div>
    );
}

Expand.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Expand