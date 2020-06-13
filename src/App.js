import React, { Component } from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Counter from './components/Counter';
import Clock from './components/Clock';

export default class App extends Component {
  render() {
    return (
    <Router>
      <Route path="/home" exact render={() =>{return(<Counter />)}} />
      <Route path="/time" exact render={() =>{return(<Clock />)}} />
    </Router>
    )
  }
}
