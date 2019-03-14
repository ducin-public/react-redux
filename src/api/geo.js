import { API_URL } from '../config'

export async function getGeo() {
  const res = await fetch(`${API_URL}/geo`)
  return res.json()
}
