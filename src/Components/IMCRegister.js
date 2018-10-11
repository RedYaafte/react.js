import React, { Component } from 'react';
import UserDetail from './UserDetail';
import IMCList from './IMCList';
import axios from "axios";


class IMCRegister extends Component{

    state = {
        user: {},
        imc: []
    }

    async componentDidMount(){
        const userId = this.props.match.params.id;
        let userRequest = await axios.get(`http://localhost:3001/users/${userId}`);
        let user = await userRequest.data;
        let imcRequest = await axios.get(`http://localhost:3001/imc?userId=${userId}`);
        let imc = await imcRequest.data;
        this.setState({user, imc});
    }

    compo

    render = () => {
        // console.log(this.props.match.params);
        return (
            <div>
                IMCRegister
                <UserDetail user={this.state.user} />
                {/* <IMCForm /> */}
                <IMCList />
            </div>
        );
    }
}

export default IMCRegister;