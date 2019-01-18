import { connect } from 'react-redux'
import React, { Component } from 'react';
import rotateAction from './actions/rotate-action'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={
            "App-logo" +
            (this.props.rotating ? "" : " App-logo-paused")
          } alt="logo"
            onClick={() => this.props.rotateAction(!this.props.rotating)} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  rotateAction: (payload) => dispatch(rotateAction(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
