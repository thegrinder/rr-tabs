import React, { Component } from 'react';
import { Tabs, Tab, TabContent } from '../src/index';


class App extends Component {
  render() {
    return (
      <Tabs namespace="test" initialTab="initial">
        <div>
          <Tab>Tab one</Tab>
          <Tab>Tab two</Tab>
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
