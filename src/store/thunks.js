import * as GeoAPI from '../api/geo'
import { getEmployees } from '../api/employees'
import { fetchGeoRequest, fetchGeoSuccess, fetchGeoFailure, fetchEmployeesRequest, fetchEmployeesSuccess, fetchEmployeesFailure, selectCountry } from './actions';

export function fetchGeo(){
  return function(dispatch, getState){
    dispatch(fetchGeoRequest())
    GeoAPI.getGeo()
      .then(data => dispatch(fetchGeoSuccess(data)))
      .catch(error => dispatch(fetchGeoFailure(error)))
  }
}

export function fetchEmployees(country){
  return function(dispatch){
    dispatch(fetchEmployeesRequest(country))
    getEmployees(country)
      .then(data => dispatch(fetchEmployeesSuccess(data)))
      .catch(error => dispatch(fetchEmployeesFailure(error)))
  }
}

const getNext = (collection) => {
  let idx = 0
  return () => {
    const result = collection[idx]
    idx++
    if (idx >= collection.length) { // OFF BY ONE
      idx = 0
    }
    return result
  }
}

export function rotateSelectedCountry(seconds){
  return function(dispatch, getState){
    const state = getState()
    const countries = Object.values(state.countries.data)
    const getNextCountry = getNext(countries)
    
    // initial
    dispatch(selectCountry(getNextCountry()))

    setInterval(() => {
      // after N seconds
      dispatch(selectCountry(getNextCountry()))
    }, seconds * 1000)
  }
}
