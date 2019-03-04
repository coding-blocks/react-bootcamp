import Actions from '../actions';

const userReducer = (
  state = {
    data: undefined,
  },
  { type, payload },
) => {
  switch (type) {
    case Actions.loginSuccess:
      return {
        ...state,
        data: payload.user,
      };
    case Actions.loginFail:
      return {
        ...state,
        data: undefined,
      };
    case Actions.logout:
      return {
        ...state,
        data: undefined,
      };
    default:
      return state;
  }
};

export default userReducer;
