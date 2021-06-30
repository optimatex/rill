import { list_3, list_2 } from './mockMessages';

// randomize the fetching
let current = true;
export const getMessagesRequest = () => {
  if (current) {
    current = false;
    return Promise.resolve(list_3);
  } else {
    current = true;
    return Promise.resolve(list_2);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sendMessagesRequest = (html: string) =>
  Promise.resolve({
    text: html,
    id: `message-id-${Math.random()}`,
    timestamp: Date.now(),
    author: {
      id: 'user-id-1',
      displayName: 'Pavlo',
      avatarUrl: 'https://i.pravatar.cc/68',
    },
  });
