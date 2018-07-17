import React, { Component } from 'react';
import { Tabs, Tab, TabContent } from '../src/index';


class App extends Component {
  handleSelect = (to) => {
    console.log(to);
  }

  render() {
    return (
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
    );
  }
}

export default App;
