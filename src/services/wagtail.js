const axios = require('axios')

const api = axios.create({
  baseURL: `${process.env.GRIDSOME_WAGTAIL_URL}`,
  withCredentials: false,
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  }
})

// Add token to interceptor for POST/PATCH request to bypass SessionAuthentication CSRF check
api.interceptors.request.use((config) => {
  let token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }
  return config
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

export const handleError = (commit, mutationTypes, error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response.status < 500) {
      commit(mutationTypes.FAILURE, error.response.data)

      if (error.response.status == 401) {
        console.log('unauth')
      }
    } else {
      // redirect to error page
      process.env.NODE_ENV == 'production' ? window.location.assign(`${process.env.BASE_URL}error`) : true
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    commit(mutationTypes.FAILURE, error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    commit(mutationTypes.FAILURE, error.message)
  }
}