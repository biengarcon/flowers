import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ProductInfo from "./ProductPage/ProductPage";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// import reducers from './reducers'
// import sagas from './sagas'
//
// // Create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// // Mount it on the Store
// const store = createStore(
//     reducers,
//     applyMiddleware(sagaMiddleware)
// )
//
// // Then run the saga
// sagaMiddleware.run(sagas)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


