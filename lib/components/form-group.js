import React from 'react';
import PropTypes from 'prop-types';

export default function formGroup( defaultClasses ) {
  function FormGroup({ children, className, ...rest }) {
    return (
      <div
        className={className ? `${className} ${defaultClasses}` : defaultClasses}
        {...rest}
      >
        {children}
      </div>
    );
  }

  FormGroup.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    className: PropTypes.string
  };

  return FormGroup;
}
