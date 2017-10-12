import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import './App.css';
import logoBlue from './logo.svg';
import logoPink from './logo1.svg';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      logo: logoBlue
    }
  }

  onClick = () => {
    this.setState({
      logo: logoPink
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <CSSTransitionGroup
            transitionName = 'fade'
            transitionEnterTimeout = {1000}
            transitionLeaveTimeout = {1000}
          > 
            <img 
              key={this.state.logo}
              src={this.state.logo} 
              className="App-logo" 
              alt="logoReact" 
            />
          </CSSTransitionGroup>
          <h2>Hi Animations !</h2>
          <button onClick={this.onClick}>Click me, baby!</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
