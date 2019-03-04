import Actions from '../store/actions';

let emailsCount = 0;
const emails = [
  {
    subject: 'Welcome to React Bootcamp',
    sender: 'naman@outlook.in',
    body: 'fsdkfhksdjfkdsfjlksdjfkldsjfklsdjflksdjffsdhfjskdfhdjsffdskjfh',
  },
  {
    subject: 'Learn React at Coding Blocks',
    sender: 'arnav@codingblocks.com',
    body: 'fsdkfhksdjfkdsfjlksdjfkldsjfklsdjflksdjffsdhfjskdfhdjsffdskjfh',
  },
  {
    subject: 'Thanks for attending React Bootcamp',
    sender: 'naman@outlook.in',
    body: 'fsdkfhksdjfkdsfjlksdjfkldsjfklsdjflksdjffsdhfjskdfhdjsffdskjfh',
  },
];

const fetchEmailsInProgress = () => ({
  type: Actions.fetchEmailsInProgress,
});

const fetchEmailsSuccess = payload => ({
  type: Actions.fetchEmailsSuccess,
  payload,
});

const fetchEmailsFail = payload => ({
  type: Actions.fetchEmailsFail,
  payload,
});

export const fetchEmails = () => async dispatch => {
  await dispatch(fetchEmailsInProgress());

  const { emails: newEmailsData } = await new Promise((resolve, reject) => {
    if (emailsCount > 10) {
      return [];
    }

    const size = Math.floor(Math.random() * emails.length);
    const newEmails = [];

    for (let i = 0; i <= size; i++) {
      newEmails.push({ id: ++emailsCount, ...emails[Math.floor(Math.random() * emails.length)] });
    }

    resolve({
      emails: newEmails,
    });
  });

  dispatch(fetchEmailsSuccess({ emails: newEmailsData }));

  return { emails: newEmailsData };
};
