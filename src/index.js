import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-social/bootstrap-social.css'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
