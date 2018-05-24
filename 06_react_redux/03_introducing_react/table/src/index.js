import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Table from './Table';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Table />, document.getElementById('root'));

registerServiceWorker();
