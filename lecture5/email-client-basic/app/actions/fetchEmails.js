const emails = [
  {
    id: Date.now(),
    subject: 'Welcome to React Bootcamp',
    sender: 'naman@outlook.in',
    body: 'fsdkfhksdjfkdsfjlksdjfkldsjfklsdjflksdjffsdhfjskdfhdjsffdskjfh',
  },
  {
    id: Date.now(),
    subject: 'Learn React at Coding Blocks',
    sender: 'arnav@codingblocks.com',
    body: 'fsdkfhksdjfkdsfjlksdjfkldsjfklsdjflksdjffsdhfjskdfhdjsffdskjfh',
  },
  {
    id: Date.now(),
    subject: 'Thanks for attending React Bootcamp',
    sender: 'naman@outlook.in',
    body: 'fsdkfhksdjfkdsfjlksdjfkldsjfklsdjflksdjffsdhfjskdfhdjsffdskjfh',
  },
];

export const fetchEmails = async () => {
  return new Promise((resolve, reject) => {
    const size = Math.floor(Math.random() * emails.length);
    const newEmails = [];

    for (let i = 0; i <= size; i++) {
      newEmails.push(emails[Math.floor(Math.random() * emails.length)]);
    }

    resolve({
      emails: newEmails,
    });
  });
};
