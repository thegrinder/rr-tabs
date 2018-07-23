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
    tabs: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { namespace, initialTab } = this.props;
    this.props.initializeTabs(namespace, initialTab);
    this.props.onSelect(initialTab);
  }

  componentWillUnmount() {
    this.props.removeTabs(this.props.namespace);
  }

  render() {
    const {
      tabs,
      namespace,
      onSelect,
      children,
    } = this.props;
    return (
      <TabsContext.Provider value={{ namespace, onSelect }}>
        {tabs[namespace] ? children : null}
      </TabsContext.Provider>
    );
  }
}

const mapStateToProps = state => ({
  tabs: state.tabs,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  initializeTabs,
  removeTabs,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
