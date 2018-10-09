import React, { Component } from 'react';


class UserForm extends Component{

    state = {
        id: 0,
        firstName: '',
        lastName: '',
        birthDate: ''
    }

    onChangeHandler = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        this.setState({id: Math.floor(Math.random() * 1000000 + 1 )})
        this.props.onSubmit(this.state);
        this.setState({firstName: '', lastName: '', birthDate: '', id: null})
    }

    render(){
        return (
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <input
                type="text"
                name="firstName"
                placeholder="Nombre"
                onChange={this.onChangeHandler}
                value={this.state.firstName}/>
          </div>
          <div>
            <input
                type="text"
                name="lastName"
                placeholder="Apellidos"
                onChange={this.onChangeHandler}
                value={this.state.lastName}/>
          </div>
          <div>
            <input type="date" name="birthDate"
                onChange={this.onChangeHandler}
                value={this.state.birthDate}/>
          </div>
          <div>
            <button>Añadir Usuario</button>
          </div>
          <div>
              <pre>{JSON.stringify(this.state)}</pre>
          </div>
        </form>
        )
    }
}

export default UserForm;
