import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes/'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (id, object) => {
  const response = await axios.put(baseUrl.concat(id), object)
  return response.data
}

const get = async(id) => {
  const response = await axios.get(baseUrl.concat(id))
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, update, get }