import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import logger from 'redux-logger';
import Info from './Info';
import thunk from 'redux-thunk';
import UserAgent from './UserAgent';

const store = createStore(reducer,
    applyMiddleware(thunk, logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />
          <UserAgent />
        </div>
      </Provider>
    );
  }
}

export default App;
