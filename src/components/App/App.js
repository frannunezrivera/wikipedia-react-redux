import React, { Component } from 'react';
import PagesContainer from '../../containers/PagesContainer/PagesContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.children || <PagesContainer/>}
      </div>
    );
  }
}

export default App;
