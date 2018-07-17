import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  TabContent,
  withTabsProps,
} from '../src/index';


class App extends Component {
  handleSelect = (to) => {
    console.log(to);
  }

  setTabRemotely = () => this.props.setTab('test', 'two')

  render() {
    return (
      <div>
        <button onClick={this.setTabRemotely}>
          set second tab outside of Tabs
        </button>
        <Tabs
          namespace="test"
          initialTab="one"
          onSelect={this.handleSelect}
        >
          <div>
            <Tab to="one">
              {({ onClick, isActive }) => (
                <button onClick={onClick} disabled={isActive}>
                  Tab one
                </button>
              )}
            </Tab>
            <Tab to="two">
              {({ onClick, isActive }) => (
                <button onClick={onClick} disabled={isActive}>
                  Tab two
                </button>
              )}
            </Tab>
          </div>
          <div>
            <TabContent for="one">Tab one content</TabContent>
            <TabContent for="two">Tab two content</TabContent>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default withTabsProps(App);
