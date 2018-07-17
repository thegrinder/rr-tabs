import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TabsContext from '../../context/tabsContext';
import TabInner from './TabInner';


class Tab extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    to: PropTypes.string.isRequired,
  }

  render() {
    return (
      <TabsContext.Consumer>
        {({ namespace, onSelect }) => (
          <TabInner namespace={namespace} onSelect={onSelect} to={this.props.to}>
            {onClick => this.props.children(onClick)}
          </TabInner>
        )}
      </TabsContext.Consumer>
    );
  }
}

export default Tab;
