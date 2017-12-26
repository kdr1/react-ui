import React from 'react';
import PropTypes from 'prop-types';

export default function input( defaultClasses ) {
  function Input({ className, groupClassName, id, label, labelClassName, type, value, ...rest }) {
    return (
      <div
        className={groupClassName ? `${defaultClasses} ${groupClassName}` : defaultClasses}
      >
        {label &&
          <label
            className={labelClassName ? `${defaultClasses} ${labelClassName}` : defaultClasses}
            for={id}
          >
            {label}
          </label>
        }
        <input
          className={className ? `${defaultClasses} ${className}` : defaultClasses}
          id={id}
          type={type ? type : 'text'}
          value={value ? value : ''}
          {...rest}
        />
      </div>
    );
  };

  Input.propTypes = {
    className: PropTypes.string,
    groupClassName: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    labelClassName: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired
  };

  return Input;
}
