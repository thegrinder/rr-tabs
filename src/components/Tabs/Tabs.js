import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default Tabs;
