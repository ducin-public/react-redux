import * as actionTypes from './constants'
import { combineReducers } from 'redux';

const initialState = {
  countries: {
    data: null,
    loading: false,
  },
  selectedCountry: null,
  employees: {
    data: null,
    loading: false
  },
  offices: {
    data: null,
    loading: false
  }
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SELECT_COUNTRY:
      return { ...state, selectedCountry: action.country }

    case actionTypes.FETCH_GEO_REQUEST:
      return {
        ...state,
        countries: { ...state.countries, loading: true }
      }

    case actionTypes.FETCH_GEO_SUCCESS:
      return {
        ...state,
        countries: { ...state.countries, data: action.data, loading: false }
      }

    case actionTypes.FETCH_GEO_FAILURE:
      return {
        ...state,
        countries: { ...state.countries, data: null, loading: false }
      }


    case actionTypes.FETCH_OFFICES_REQUEST:
      return {
        ...state,
        offices: { ...state.offices, loading: true }
      }

    case actionTypes.FETCH_OFFICES_SUCCESS:
      return {
        ...state,
        offices: { ...state.offices, data: action.data, loading: false }
      }

    case actionTypes.FETCH_OFFICES_FAILURE:
      return {
        ...state,
        offices: { ...state.offices, data: null, loading: false }
      }


    case actionTypes.FETCH_EMPLOYEES_REQUEST:
      return {
        ...state,
        employees: { ...state.employees, loading: true }
      }

    case actionTypes.FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: { ...state.employees, data: action.data, loading: false }
      }

    case actionTypes.FETCH_EMPLOYEES_FAILURE:
      return {
        ...state,
        employees: { ...state.employees, data: null, loading: false }
      }


    default:
      return state
  }
}

// const food = rootReducer
// const money = rootReducer

// const _rootReducer = combineReducers({
//   food,
//   money
// })
