import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import UserRegister from './Components/UserRegister';
import IMCRegister from './Components/IMCRegister';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={UserRegister}></Route>
            <Route path='/users/:id' component={IMCRegister}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
