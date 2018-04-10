// Libraries
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

// Main Application
import App from './components/App';

// Styles
import './styles/react-redux-toastr.css';
import './styles/default.css';

render(<App />, document.getElementById('root'));
