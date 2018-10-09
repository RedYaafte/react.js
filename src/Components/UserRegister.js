import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';


class UserRegister extends Component{
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

    render = () => {
        return (
            <>
                <UserForm onSubmit={this.onFormSubmitHandler} />
                <UserList userList={this.state.userList} />
            </>
        )
    }
}

export default UserRegister;