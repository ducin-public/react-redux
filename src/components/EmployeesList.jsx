import React from 'react'

import { List } from './List'

export const EmployeeItem = ({ employee }) => (<div>
  {employee.firstName} {employee.lastName}, {employee.salary} $
</div>)

export const EmployeeList = List('employee', e => e.id)(EmployeeItem)
