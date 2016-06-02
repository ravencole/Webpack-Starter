import React from 'react';
import { render } from 'react-dom';
// import Routes from './Routes';
import App from './App';

/* IMPORT SASS FOR WEBPACK TO COMPILE */
require('./styles/styles.scss');

render((
    <App />
    ), document.getElementById('app'));