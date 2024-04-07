import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  res => {
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
