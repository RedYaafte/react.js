import React, { Component } from 'react';
import UserDetail from './UserDetail';
import IMCList from './IMCList';
import IMCForm from './IMCForm';
import { IMCCalculator } from '../IMCCalculator'; 
import axios from "axios";


class IMCRegister extends Component{

    state = {
        user: {},
        imc: [],
    }

    async componentDidMount(){
        const userId = this.props.match.params.id;
        let userRequest = await axios.get(`http://localhost:3001/users/${userId}`);
        let user = userRequest.data;
        let imcRequest = await axios.get(`http://localhost:3001/imc?userId=${userId}`);
        let imc = imcRequest.data;
        this.setState({user, imc});
    }

    fetchIMC = async () => {
        let imcRequest = await axios.get(`http://localhost:3001/imc?userId=${this.props.match.params.id}`);
        let imc = imcRequest.data;
        this.setState({imc});
    }

    onIMCFormHandler = ({weight, height}) => {
        // calcular imc
        let imc = IMCCalculator(weight, height)
        // Envíar imc api
        this.postIMCData(weight, height, imc);
    }

    postIMCData = async (weight, height, imc) => {
        const data = { 
            weight,
            height,
            imc,
            userId: this.state.user.id
        }
        const req = await axios.post('http://localhost:3001/imc', data);
        if(req.status === 201){
            this.fetchIMC()
        }
    }

    render = () => {
        // console.log(this.props.match.params);
        return (
            <div>
                IMCRegister
                <UserDetail user={this.state.user} />
                <IMCForm onSubmit={this.onIMCFormHandler}/>
                <IMCList IMCList={this.state.imc}/>
            </div>
        );
    }
}

export default IMCRegister;