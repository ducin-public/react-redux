import { connect } from 'react-redux'

import { EmployeeList } from './EmployeesList'

// kabel do odczytu
const mapStateToProps = (state) => ({
  employees: state.employees.data ? state.employees.data : []
})

// kabel do zapisu
// const mapDispatchToProps

export const EmployeesListContainer =
  connect(mapStateToProps)(EmployeeList)
