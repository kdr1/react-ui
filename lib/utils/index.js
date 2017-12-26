import React from 'react';
import { Input } from '../edition/standard';

export function applyChangeHandlers(node) {
  return React.Children.map(node, child => {
    if (child.type) {
      switch (child.type) {
        case Input:
          return React.cloneElement(child, {
            onChange: handleInputChange.bind(this),
            value: getNestedValueFromDotDelineatedString(child.props.name, this.state)
          });
        default:
          break;
      }
    }

    if (child.props
      && child.props.children
      && (Array.isArray(child.props.children) || (typeof child.props.children === 'object' && child.props.children !== null))) {
      return applyChangeHandlers.call(this, child.props.children);
    } else {
      return child;
    }
  });
};

export function buildInitialState(node, state) {
  state = state ? state : {};

  if (Array.isArray(node)) {
    React.Children.forEach(node, child => {
      if (child.type) {
        switch (child.type) {
          case Input:
            const { name, value } = child.props;
            name && createNestingAndSetNestedKeyOfObject(name, value, state);
            break;
          default:
            break;
        }
      }

      if (child.props && child.props.children) {
        return buildInitialState(child.props.children, state);
      }
    });
  }

  return state;
}

export function createNestingAndSetNestedKeyOfObject(keyString, value, obj) {
  const nesting = keyString.split('.');

  if (nesting.length === 1) {
    return obj[nesting[0]] = value;
  }

  const length = nesting.length;
  let i, at;

  for (i = 0; i < length; i++) {
    at = at ? at : obj;

    const key = nesting[i];

    if (i === length - 1) {
      return at[key] = value || null;
    }

    if (!at[key]) {
      at[key] = {};
    }

    at = at[key];
  }
}

export function getNestedValueFromDotDelineatedString(keyString, obj) {
  const nesting = keyString.split('.');

  const length = nesting.length;
  let i, at;

  for (i = 0; i < length; i++) {
    at = at ? at : obj;

    const key = nesting[i];

    if (i === length - 1) {
      return at[key];
    }

    at = at[key];
  }
}

export function handleInputChange(e) {
  this.setState(
    nonMutatingUpdateOfNestedValue(e.target.name, this.state, e.target.value)
  );
}

export function nonMutatingUpdateOfNestedValue(keyString, obj, value) {
  const nesting = keyString.split('.');
  const length = nesting.length;
  let i, at, _obj = { ...obj };

  for (i = 0; i < length; i++) {
    at = at ? at : _obj;
    const key = nesting[i];

    if (i === length - 1) {
      at[key] = value;
    } else {
      at = at[key];
    }
  }

  return _obj;
}
