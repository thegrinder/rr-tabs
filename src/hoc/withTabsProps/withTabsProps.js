import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTab as setTabAction } from '../../redux/actions';


function withTabsProps(TabsPropsComponent) {
  const propTypes = {
    setTab: PropTypes.func.isRequired,
    tabs: PropTypes.object.isRequired,
  };

  function TabsPropsWrapper({ setTab, tabs, ...propsRest }) {
    return (
      <TabsPropsComponent
        setTab={setTab}
        tabs={tabs}
        {...propsRest}
      />
    );
  }

  TabsPropsWrapper.propTypes = propTypes;

  const mapStateToProps = state => ({ tabs: state.tabs });

  const mapDispatchToProps = dispatch => bindActionCreators({
    setTab: setTabAction,
  }, dispatch);

  return connect(mapStateToProps, mapDispatchToProps)(TabsPropsWrapper);
}

export default withTabsProps;
