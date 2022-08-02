import React from 'react';

import './style.css';
import ArrayMapping from './ArrayMapping';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monster1: {
        name: 'Linda',
      },
      monster2: {
        name: 'Frank',
      },
      monster3: {
        name: 'Jacky',
      },
    };
  }
  render() {
    return (
      <div className="App">
        {/* this way is not good for million list. */}
        <h2 className="array-mapp">Access an object using Element </h2>
        <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h2 className="array-mapp">Array mapping</h2>
        <ArrayMapping />
      </div>
    );
  }
}
