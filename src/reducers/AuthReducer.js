export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        message: 'SUCCESS SIGNIN',
        isLoggedIn: true,
        userId: action.userId,
        timeout: action.timeout,
        username: action.username,
        token: action.token,
        level: action.level,
        email: action.email
      }
    case 'RESTORE':
      return {
        ...state,
        message: 'SUCCESS RESTORE',
        isLoggedIn: action.payload.isLoggedIn,
        userId: action.payload.userId,
        timeout: action.payload.timeout,
        username: action.payload.username,
        token: action.payload.token,
        level: action.payload.level,
        email: action.payload.email
      }
    case 'LOGOUT':
      return {
        ...state,
        message: 'SUCCESS LOGOUT',
        isLoggedIn: false,
        userId: null,
        timeout: null,
        username: null,
        token: null,
        level: null,
        email: null
      }
    default:
      return state
  }
}
