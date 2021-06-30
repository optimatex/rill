export const mockObject_1 = {
  type: 'with inner object',
  person: {
    userName: 'Alex',
    userAge: 12,
  },
  book: {
    bookName: 'Red',
    pagesCount: 55,
  },
  innerShape: {
    name: '2-d level name',
    someShape: {
      name: '3-d level name',
      keyName: '3-d level value',
    },
  },
};

export const mockObject_2 = {
  type: 'with inner object',
  innerShape: {
    name: '2-d level name',
    someShape: {
      name: '3-d level name',
      keyName: '3-d level value',
    },
  },
};

export const mockObject_3 = {
  type: 'with inner object',
  person: {
    userName: 'Alex',
    userAge: 12,
    book: {
      bookName: 'Red',
      pagesCount: 55,
      innerShape: {
        name: '2-d level name',
        someShape: {
          name: '3-d level name',
          keyName: '3-d level value',
          innerShape: {
            name: '2-d level name',
            someShape: {
              name: '3-d level name',
              keyName: '3-d level value',
            },
            innerShape: {
              name: '2-d level name',
              someShape: {
                name: '3-d level name',
                keyName: '3-d level value',
              },
            },
          },
        },
      },
    },
  },
  book: {
    bookName: 'Red',
    pagesCount: 55,
  },
  innerShape: {
    name: '2-d level name',
    someShape: {
      name: '3-d level name',
      keyName: '3-d level value',
    },
  },
};
