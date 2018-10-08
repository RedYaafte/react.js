import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const container = document.querySelector('#app');

// ReactDOM.render(que voy a renderizar, donde lo haré)
// const holaMundo = <h1>Sigue funcionando</h1>;
render(<Media type="video" title="¿Que es responsive design?" author="Leonidas Esteban" image="./images/covers/responsive.jpg"/>, app);