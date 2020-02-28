import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './ExercFirstComponent';
import FunctionalComponent from './FunctionalComponent';
import './Functionalcomponent.css';
import ClassComponent from './ClassComponent';
import './Classcomponent.css'


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code>
          </p>
          
          <FirstComponent/>
         
          
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
         
        </p>
        <div className='lista'>
          <FunctionalComponent/>
        </div>

      </div>
    );
  }
}

export default App;
