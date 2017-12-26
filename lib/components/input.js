import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../edition/basic';

export default function input( defaultClasses ) {
  function Input({ className, groupClassName, id, label, labelClassName, type, value, ...rest }) {
    return (
      <div
        className={groupClassName ? `${defaultClasses} ${groupClassName}` : defaultClasses}
      >
        {label &&
          <Label
            className={labelClassName && labelClassName}
            htmlFor={id}
          >
            {label}
          </Label>
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
    value: PropTypes.string
  };

  return Input;
}
