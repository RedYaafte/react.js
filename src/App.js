import React, { Component } from 'react';
import './App.css';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';

class App extends Component {

  state = {
    userList: [
      {id: 1, firstName: 'Ernesto', lastName: 'Jiménez', birthDate: '1982-11-25'},
      {id: 2, firstName: 'Juan', lastName: 'Perez', birthDate: '1983-11-25'},
      {id: 3, firstName: 'Francisco', lastName: 'Hernandez', birthDate: '1992-11-25'}
    ]
  }

  onFormSubmitHandler = (user) => {
    this.setState({userList: [user, ...this.state.userList]});
  }

  render() {
    return (
      <div className="App">
        {/* User Form */}
        <UserForm onSubmit={this.onFormSubmitHandler} />
        {/* User List */}
        <UserList userList={this.state.userList} />
      </div>
    );
  }
}

export default App;
