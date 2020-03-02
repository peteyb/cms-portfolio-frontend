const axios = require('axios')

const api = axios.create({
  baseURL: `${process.env.GRIDSOME_WAGTAIL_URL}`,
  withCredentials: false,
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${process.env.GRIDSOME_WAGTAIL_TOKEN}`,
  }
})

export const get = async (commit, { url, mutationTypes, payload }) => {
  try {
    const response = await api.get(url, payload)
    commit(mutationTypes.SUCCESS, response.data)
    return response
  }
  catch (error) {
    handleError(commit, mutationTypes, error)
  }
}