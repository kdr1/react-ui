import React from 'react';
import PropTypes from 'prop-types';

export default function button(defaultClasses) {
  function Button({ children, className, reset, type, ...rest }) {
    return (
      <button
        className={className ? `${defaultClasses} ${className}` : defaultClasses}
        type={reset ? 'text' : type || 'submit'}
        {...rest}
      >
        {children}
      </button>
    );
  }

  Button.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    reset: PropTypes.bool,
    type: PropTypes.string,
  };

  return Button;
}
