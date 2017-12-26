import React from 'react';
import PropTypes from 'prop-types';
import { bootstrapClasses } from '../config';

export default function button(defaultClasses) {
  function Button({ children, className, reset, type, ...rest }) {
    // add btn-primary to bootstrap buttons if no button class type is provided
    if (defaultClasses === bootstrapClasses.button) {
      if (!className || className && className.indexOf('btn-') === -1){
        defaultClasses = `${defaultClasses} btn-primary`;
      }
    }

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
