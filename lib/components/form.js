import React from 'react';
import PropTypes from 'prop-types';
import { applyChangeHandlers, buildInitialState, deepClone } from '../utils';

export default function form( defaultClasses ) {
  return class Form extends React.Component {
    static propTypes = {
      children: PropTypes.oneOfType([
        PropTypes.arrayOf( PropTypes.node ),
        PropTypes.node
      ]).isRequired,
      className: PropTypes.string,
      onReset: PropTypes.func,
      onSubmit: PropTypes.func.isRequired,
    }

    constructor(props) {
      super(props);

      const { children } = this.props;

      this.initialState = buildInitialState(children);

      this.state = deepClone(this.initialState);

      this.handleSubmit = this.handleSubmit.bind(this);
      this.reset = this.reset.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();

      const { onSubmit } = this.props;

      onSubmit && onSubmit(e, this.state);
    }

    reset(e) {
      e.preventDefault();
      const { onReset } = this.props;
      this.setState(onReset ? onReset(deepClone(this.initialState), deepClone(this.state)) : deepClone(this.initialState));
    }

    render() {
      const { children, className } = this.props;

      const childrenWithChangeHandlers = applyChangeHandlers.call(this, children);

      return (
        <form
          className={className ? `${defaultClasses} ${className}` : defaultClasses}
          onSubmit={this.handleSubmit}
        >
          {childrenWithChangeHandlers}
        </form>
      );
    }
  };
}
