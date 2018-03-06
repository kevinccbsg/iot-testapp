import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Error403 = () => <h1>Error 403</h1>;

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/403" component={Error403}/>
    </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
