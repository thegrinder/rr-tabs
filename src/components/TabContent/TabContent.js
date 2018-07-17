import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TabsContext from '../../context/tabsContext';


class TabContent extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    for: PropTypes.string.isRequired,
    tabs: PropTypes.object.isRequired,
  }

  render() {
    return (
      <TabsContext.Consumer>
        {({ namespace }) => (this.props.tabs[namespace] === this.props.for
          ? this.props.children
          : null)}
      </TabsContext.Consumer>
    );
  }
}

const mapDispatchToProps = state => ({ tabs: state.tabs });

export default connect(mapDispatchToProps)(TabContent);
