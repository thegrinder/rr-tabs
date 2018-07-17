import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TabsContext from '../../context/tabsContext';


const propTypes = {
  children: PropTypes.node.isRequired,
  for: PropTypes.string.isRequired,
  tabs: PropTypes.object.isRequired,
};

function TabContent(props) {
  return (
    <TabsContext.Consumer>
      {({ namespace }) => (props.tabs[namespace] === props.for
        ? props.children
        : null)}
    </TabsContext.Consumer>
  );
}

TabContent.propTypes = propTypes;

const mapDispatchToProps = state => ({ tabs: state.tabs });

export default connect(mapDispatchToProps)(TabContent);
