export const gitbutReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_USER":
      return {
        ...state,
        users: action.users,
        loading: false,
      }

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      }

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      }

    case "GET_USER":
      return {
        ...state,
        user: action.user,
        loading: false,
      }
    case "POPULATE_REPO":
      return {
        ...state,
        repo: action.repo,
        loading: false,
      }
    default:
      return state
  }
}
