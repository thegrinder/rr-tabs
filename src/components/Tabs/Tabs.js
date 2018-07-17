import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initializeTabs, removeTabs } from '../../redux/actions';
import TabsContext from '../../context/tabsContext';


class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    namespace: PropTypes.string.isRequired,
    initialTab: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    initializeTabs: PropTypes.func.isRequired,
    removeTabs: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.initializeTabs(this.props.namespace, this.props.initialTab);
  }

  componentWillUnmount() {
    this.props.removeTabs(this.props.namespace);
  }

  render() {
    const { namespace, onSelect, children } = this.props;
    return (
      <TabsContext.Provider value={{ namespace, onSelect }}>
        {children}
      </TabsContext.Provider>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  initializeTabs,
  removeTabs,
}, dispatch);

export default connect(undefined, mapDispatchToProps)(Tabs);
