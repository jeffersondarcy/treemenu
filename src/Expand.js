import React from 'react';
import PropTypes from 'prop-types';

function Expand({expanded, toggle}) {

    return (
        <div onClick={toggle}>
            ({expanded ? '-' : '+'})
        </div>
    );
}

Expand.propTypes = {
    expanded: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
}

export default Expand