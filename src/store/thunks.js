import * as GeoAPI from '../api/geo'
import { getEmployees } from '../api/employees'
import { fetchGeoRequest, fetchGeoSuccess, fetchGeoFailure, fetchEmployeesRequest, fetchEmployeesSuccess, fetchEmployeesFailure } from './actions';

export function fetchGeo(){
  return function(dispatch){
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
