import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './src/modules';

import Index from './Index.jsx';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
))

const App = () => {

  return (
    <Provider store={store}>
      <Index />
    </Provider>
  )
}

export default App;