import React, { Component } from 'react';
import UserDetail from './UserDetail';
import IMCList from './IMCList';


class IMCRegister extends Component{

    state = {
        user: {id: 1, firstName: 'Ernesto', lastName: 'Jiménez', birthDate: '1982-11-25'},
        imc: [
            {id: 1, weight: 89, height: 1.79, imc: 2.5},
            {id: 2, weight: 89, height: 1.79, imc: 2.5},
            {id: 3, weight: 89, height: 1.79, imc: 2.5},
            {id: 4, weight: 89, height: 1.79, imc: 2.5},
            {id: 5, weight: 89, height: 1.79, imc: 2.5},
            {id: 6, weight: 89, height: 1.79, imc: 2.5},
        ]
    }

    render = () => {
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