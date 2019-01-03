import React from 'react';
import { render } from 'react-dom';
import createStore from './store';
import { Provider } from 'react-redux';
import TodoApp from './containers/TodoApp';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import Error from './components/Error';

const history = createBrowserHistory();
const store = createStore(history);
render(
  <Provider store={store}>
    <ConnectedRouter store={store} history={history}>
      <div>
        <Route exact path="/" component={TodoApp}/>
        <Route exact path="/error" component={Error}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
