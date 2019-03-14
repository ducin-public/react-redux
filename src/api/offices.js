//http://localhost:3000/offices?country=Germany

import { API_URL } from '../config'

export async function getOffices(country) {
  const res = await fetch(`${API_URL}/offices?country=${country}`)
  return res.json()
}

