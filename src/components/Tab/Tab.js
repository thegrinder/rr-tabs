import React from 'react';
import PropTypes from 'prop-types';
import TabsContext from '../../context/tabsContext';
import TabInner from './TabInner';


const propTypes = {
  children: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
};

function Tab(props) {
  return (
    <TabsContext.Consumer>
      {({ namespace, onSelect }) => (
        <TabInner
          namespace={namespace}
          onSelect={onSelect}
          to={props.to}
        >
          {onClick => props.children(onClick)}
        </TabInner>
      )}
    </TabsContext.Consumer>
  );
}

Tab.propTypes = propTypes;

export default Tab;
