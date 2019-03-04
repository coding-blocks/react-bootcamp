import Actions from '../actions';

const authReducer = (
  state = {
    inProgress: false,
    loggedIn: false,
    errors: undefined,
  },
  { type, payload },
) => {
  switch (type) {
    case Actions.loginInProgress:
      return {
        ...state,
        inProgress: true,
        errors: undefined,
      };
    case Actions.loginSuccess:
      return {
        ...state,
        inProgress: false,
        loggedIn: true,
        errors: undefined,
      };
    case Actions.loginFail:
      return {
        ...state,
        inProgress: false,
        loggedIn: false,
        errors: payload.errors,
      };
    case Actions.logout:
      return {
        ...state,
        inProgress: false,
        loggedIn: false,
        errors: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
