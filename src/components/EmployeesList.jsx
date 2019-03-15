import React from 'react'

// funkcyjny
export const EmployeeList = ({ employees }) => (<div>
  <ol>
    {employees.map((e) =>
      <li key={e.id}>{e.firstName} {e.lastName}</li>)}
  </ol>
</div>)
