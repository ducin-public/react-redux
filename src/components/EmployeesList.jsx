import React from 'react'

// List - HOC

// funkcyjny
export const EmployeeList = ({ employees: collection }) => (<div>
  <ol>
    {collection.map((e) =>
      <li key={e.id}>
        <EmployeeItem employee={e} />
      </li>)}
  </ol>
</div>)

// const _EmployeeList = List(EmployeeItem)

export const EmployeeItem = ({ employee }) => (<div>
  {employee.firstName} {employee.lastName}, {employee.salary}$$$
</div>)
