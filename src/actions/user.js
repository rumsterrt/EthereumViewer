import { sendRequest } from 'utils/api'

export const setCurrentUser = ({ username }) => {
  return dispatch => {
    sendRequest({
      method: 'get',
      endpoint: `/users/${username}`,
    })
      .then(({ data: { login, public_repos, ...rest } }) => {
        dispatch({
          type: 'SET_USER',
          payload: { id: login, totalRepos: public_repos, info: rest },
        })
      })
      .catch(e => console.log(e))
  }
}

export const getUserRepos = ({ page, id }) => {
  return dispatch => {
    sendRequest({
      method: 'get',
      endpoint: `/users/${id}/repos?page=${page}`,
    })
      .then(response => {
        dispatch({ type: 'GET_REPOS', payload: { data: response.data } })
      })
      .catch(e => console.log(e))
  }
}
