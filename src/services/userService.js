import { api } from 'src/boot/axios'

const getUsers = async () => {
  const response = await api.get('/users')
  return response.data
}

const getUserById = async (id) => {
  const response = await api.get(`/users${id}`)
  return response.data
}

export { getUsers, getUserById }
