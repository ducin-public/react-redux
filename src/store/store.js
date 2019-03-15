import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import {
  helloSaga,
  rotateCountriesAfterGeoSuccess,
  bootstrapSaga,
  fetchCountryDataAfterSelectedSaga
} from './sagas'

import { rootReducer } from './reducers'

export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = [thunk, sagaMiddleware]

  const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ))

  sagaMiddleware.run(helloSaga)
  sagaMiddleware.run(rotateCountriesAfterGeoSuccess)
  sagaMiddleware.run(bootstrapSaga)
  sagaMiddleware.run(fetchCountryDataAfterSelectedSaga)

  return store
}
