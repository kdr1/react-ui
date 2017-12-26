import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from '../edition/basic';

export default function input( defaultClasses ) {
  function Input({ className, groupClassName, id, label, labelClassName, type, value, ...rest }) {
    return (
      <FormGroup
        className={groupClassName && groupClassName}
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
          type={type || 'text'}
          value={value || ''}
          {...rest}
        />
      </FormGroup>
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
