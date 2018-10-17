import React, { Component } from 'react';

class IMCForm extends Component {
    state = {
        weight: '',
        height: ''
    }

    onChangeHandler = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        // console.log(this.state);
        this.props.onSubmit(this.state);
    }

    render(){
        return (
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <input
                type="text"
                name="height"
                placeholder="altura"
                onChange={this.onChangeHandler}
                value={this.state.height}/>
          </div>
          <div>
            <input
                type="text"
                name="weight"
                placeholder="peso"
                onChange={this.onChangeHandler}
                value={this.state.lastName}/>
          </div>
          <div>
            <button>Añadir IMC</button>
          </div>
        </form>
        )
    }
}

export default IMCForm;