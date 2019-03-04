import Actions from '../actions';

const emailsReducer = (
  state = {
    inProgress: false,
    data: [],
  },
  { type, payload },
) => {
  switch (type) {
    case Actions.loginFail:
      return {
        ...state,
        inProgress: false,
        data: [],
      };
    case Actions.logout:
      return {
        ...state,
        inProgress: false,
        data: [],
      };
    case Actions.fetchEmailsInProgress:
      return {
        ...state,
        inProgress: true,
      };
    case Actions.fetchEmailsSuccess:
      return {
        ...state,
        inProgress: false,
        data: state.inProgress ? [...state.data, ...payload.emails] : [],
      };
    case Actions.fetchEmailsFail:
      return {
        ...state,
        inProgress: false,
      };
    default:
      return state;
  }
};

export default emailsReducer;
