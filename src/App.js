import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.js';
import Puzzle from './components/Puzzle.js';
import Game from './games/Game.js';
import {Switch, Route} from 'react-router-dom';

class App extends Component {

//
//
//
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/puzzles'>
            <Puzzle/>
          </Route>
          <Route exact path="/game">
            <Game/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
