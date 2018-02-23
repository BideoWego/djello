import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './javascripts/containers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import djello from './javascripts/reducers';
import { history } from './javascripts/helpers';
import { Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/index.css';


const store = createStore(
  djello,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer} />
      {/* TODO Error404 route and component here */}
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
