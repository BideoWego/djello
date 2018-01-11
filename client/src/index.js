import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './javascripts/containers';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);
registerServiceWorker();
