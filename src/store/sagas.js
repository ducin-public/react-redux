import { select, put, take, takeEvery, takeLatest } from 'redux-saga/effects'

import { FETCH_GEO_SUCCESS } from './constants';
import { rotateSelectedCountry } from './thunks';

export function* helloSaga(){
  console.log('HELLO')
}

function* turnOnRotate(){
  yield put(rotateSelectedCountry(5))
}

export function* rotateCountriesAfterGeoSuccess(){
  yield takeLatest(FETCH_GEO_SUCCESS, turnOnRotate)
}

// const state = yield select() // getState
// yield put(mojaAkcjaReduxowa()) // dispatch
// const action = yield take('SELECT_COUNTRY')
// jedziemyMalina()
