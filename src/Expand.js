import React from 'react';
import PropTypes from 'prop-types';

function Expand({expanded, onClick}) {

    return (
        <div onClick={onClick}>
            ({expanded ? '-' : '+'})
        </div>
    );
}

Expand.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Expand