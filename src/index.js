import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Utstilling from './Utstilling';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Utstilling />, document.getElementById('root'));
registerServiceWorker();
