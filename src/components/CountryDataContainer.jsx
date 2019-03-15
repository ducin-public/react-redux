import React from 'react'

import { connect } from 'react-redux'

import { EmployeesListContainer } from './EmployeeListContainer';
import { TokenContext } from '../svc/context';

const mapStateToProps = state => ({
  employees: state.employees
})

const CountryData = ({ employees }) => {
  const displayEmployees = !employees.loading && employees.data
  return (<div>
    <TokenContext.Consumer>
      {(token) => <h3>token: {token}</h3>}
    </TokenContext.Consumer>
    {displayEmployees && <EmployeesListContainer />}
  </div>)
}

export const CountryDataContainer = connect(mapStateToProps)(CountryData)
