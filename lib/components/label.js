import React from 'react';
import PropTypes from 'prop-types';

export default function label( defaultClasses ) {
  function Label({ children, className, htmlFor, ...rest }) {
    return (
      <label
        className={className ? `${defaultClasses} ${className}` : defaultClasses}
        htmlFor={htmlFor}
        {...rest}
      >
        {children}
      </label>
    );
  }

  Label.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    htmlFor: PropTypes.string.isRequired,
  };

  return Label;
}
