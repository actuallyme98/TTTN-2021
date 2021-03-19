interface User {
  id: number;
  name: string;
  image: any;
}

const mockChatbot: User = {
  id: 20,
  name: 'Chat bot',
  image: require('../src/assets/stories/1.jpg'),
};

const ConversationsDb: User[] = [
  {
    id: 1,
    name: 'Rich brian',
    image: require('../src/assets/stories/1.jpg'),
  },
  {
    id: 2,
    name: 'JOJI',
    image: require('../src/assets/stories/2.jpg'),
  },
  {
    id: 3,
    name: 'Eminem',
    image: require('../src/assets/stories/3.jpg'),
  },
  {
    id: 4,
    name: 'WILL',
    image: require('../src/assets/stories/4.jpg'),
  },
  {
    id: 5,
    name: 'Actually me',
    image: require('../src/assets/stories/5.jpg'),
  },
];

export {
  ConversationsDb,
  mockChatbot,
};
