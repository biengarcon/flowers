import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Spinner from 'react-bootstrap/Spinner'


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

const ProfilePage = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
      <Suspense fallback={<Spinner className='spinner' animation="border" role="status" />}>
          <ProfilePage />
      </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


