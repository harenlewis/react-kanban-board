import React, { Component } from 'react';
import Header from './common/containers/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <KanbanBoard /> */}
      </div>
    );
  }
}

export default App;
