import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
    <React.StrictMode>
        <h1>Enrollment App</h1>
    </React.StrictMode>,
    document.querySelector('#app')
);


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector('#root')
);