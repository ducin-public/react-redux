//http://localhost:3000/employees?office_like=Germany

import { API_URL } from '../config'

export async function getEmployees(country) {
  const res = await fetch(`${API_URL}/employees?office_like=${country}`)
  return res.json()
}
