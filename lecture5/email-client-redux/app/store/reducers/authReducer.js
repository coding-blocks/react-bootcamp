const authReducer = (
  state = {
    inProgress: false,
    loggedIn: false,
    errors: undefined,
  },
  { type, payload },
) => {
  switch (type) {
    case 'test':
      return { foo: 'abc' };
    default:
      return state;
  }
};

export default authReducer;
