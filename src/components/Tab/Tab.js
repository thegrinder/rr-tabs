import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Tab extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default Tab;
