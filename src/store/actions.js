import * as actionTypes from './constants'

// country - country name (not country code)

export const selectCountry = (country) => ({
  type: actionTypes.SELECT_COUNTRY,
  country
})

// fetch geo

export const fetchGeoRequest = () => ({
  type: actionTypes.FETCH_GEO_REQUEST,
})

export const fetchGeoSuccess = (data) => ({
  type: actionTypes.FETCH_GEO_SUCCESS,
  data
})

export const fetchGeoFailure = (error) => ({
  type: actionTypes.FETCH_GEO_FAILURE,
  error
})

// fetch employees

export const fetchEmployeesRequest = (country) => ({
  type: actionTypes.FETCH_EMPLOYEES_REQUEST,
  country
})

export const fetchEmployeesSuccess = (data) => ({
  type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
  data
})

export const fetchEmployeesFailure = (error) => ({
  type: actionTypes.FETCH_EMPLOYEES_FAILURE,
  error
})

// fetch offices

export const fetchOfficesRequest = (country) => ({
  type: actionTypes.FETCH_OFFICES_REQUEST,
  country
})

export const fetchOfficesSuccess = (data) => ({
  type: actionTypes.FETCH_OFFICES_SUCCESS,
  data
})

export const fetchOfficesFailure = (error) => ({
  type: actionTypes.FETCH_OFFICES_FAILURE,
  error
})
