const initState = {
  id: null,
  totalRepos: 0,
  repositories: [],
  info: {},
}

export default function user(state = initState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        id: action.payload.id,
        totalRepos: action.payload.totalRepos,
        repositories: [],
        info: action.payload.info,
      }
    case 'GET_REPOS':
      return {
        ...state,
        repositories: [...state.repositories, ...action.payload.data],
      }
  }
  return state
}
