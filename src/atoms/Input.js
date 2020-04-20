// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Container

/**
 * Input container
 *
 * @param {string} title
 * @returns {React}
 * @constructor
 */
function Input({ defaultValue }) {
    return (
        <input
            type="text"
            defaultValue={defaultValue}
            onChange={onkeypress}
        />
    );
}

Input.defaultProps = {
    defaultValue: undefined,
};

Input.propTypes = {
    defaultValue: PropTypes.string,
};

// ============================================================
// Exports
export default Input;
