import axios from 'axios'
import { baseURL, headers as baseHeaders } from '../config'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export const createRequestTypes = baseName => {
  return [REQUEST, SUCCESS, FAILURE].map(type => baseName + '_' + type)
}

export const sendRequest = ({ endpoint, method, body, headers }) => {
  const data = {
    url: baseURL + endpoint,
    method,
    body,
    headers: { ...headers, ...baseHeaders },
    responseType: 'json',
  }

  return axios(data)
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject({ ...response })
      }
      return { data: response.data }
    })
    .then(
      response => ({ ...response }),
      error => ({
        error: (error && error.message) || error || 'Unknown error',
        response: error.data || {},
      }),
    )
}
