import { select, put, takeLatest } from 'redux-saga/effects'

import { FETCH_GEO_SUCCESS, SELECT_COUNTRY } from './constants';
import { fetchGeo, fetchEmployees, rotateSelectedCountry } from './thunks';

export function* helloSaga(){
  console.log('HELLO')
}

///////////////////////////////////

function* turnOnRotate(){
  // @ts-ignore (redux-saga doesn't know about redux-thunk)
  yield put(rotateSelectedCountry(20))
}

export function* rotateCountriesAfterGeoSuccess(){
  yield takeLatest(FETCH_GEO_SUCCESS, turnOnRotate)
}

///////////////////////////////////

export function * bootstrapSaga(){
  yield put(fetchGeo())
  // yield put(fetchEmployees('Poland'))
}

///////////////////////////////////

function* fetchCountryDataSaga(){
  const state = yield select()
  yield put(fetchEmployees(state.selectedCountry))
}

export function* fetchCountryDataAfterSelectedSaga(){
  yield takeLatest(SELECT_COUNTRY, fetchCountryDataSaga)
}
