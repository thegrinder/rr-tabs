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
            {onSelect => (
              <button onClick={onSelect}>one</button>
            )}
          </Tab>
          <Tab to="two">
            {onSelect => (
              <button onClick={onSelect}>two</button>
            )}
          </Tab>
        </div>
        <div>
          <TabContent>Tab one content</TabContent>
          <TabContent>Tab two content</TabContent>
        </div>
      </Tabs>
    );
  }
}

export default App;
