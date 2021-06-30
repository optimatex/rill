require('@testing-library/jest-native/extend-expect');

// require('jest-styled-components');

jest.mock('react-native-vector-icons', () => ({
  createIconSetFromIcoMoon: () => null,
}));
