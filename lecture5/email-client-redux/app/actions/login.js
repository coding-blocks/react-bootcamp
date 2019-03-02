import Actions from '../store/actions';

const loginInProgress = () => ({
  type: Actions.loginInProgress,
});

const loginSuccess = payload => ({
  type: Actions.loginSuccess,
  payload,
});

const loginFail = payload => ({
  type: Actions.loginFail,
  payload,
});

export const login = async ({ username, password }) => {
  return async function(dispatch) {
    dispatch(loginInProgress());

    try {
      const { user } = await new Promise((resolve, reject) => {
        setTimeout(function() {
          if (username === 'john' && password === 'doe') {
            resolve({
              user: {
                username: 'john',
                name: 'John Doe',
                avatar_url:
                  'https://ttf.org.au/conference/leadership2017/wp-content/uploads/sites/3/2017/08/Male-Icon.jpg',
              },
            });
          }

          reject({
            errors: {
              _default: { message: 'username or password do not match' },
            },
          });
        }, 300);
      });

      dispatch(loginSuccess({ user }));

      return { user };
    } catch (err) {
      dispatch(loginFail(err));
      return err;
    }
  };
};
