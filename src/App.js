import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <from>
          <div>
            <input type="text" name="firstName" placeholder="Nombre" />
          </div>
          <div>
            <input type="text" name="lastName" placeholder="Apellidos" />
          </div>
          <div>
            <input type="date" name="birthDate" />
          </div>
          <div>
            <button>Añadir Usuario</button>
          </div>
        </from>
        <ul>
          <li>Ernesto Jiménez Villaseñor</li>
          <li>Juan Perez Prado</li>
        </ul>
      </div>
    );
  }
}

export default App;
