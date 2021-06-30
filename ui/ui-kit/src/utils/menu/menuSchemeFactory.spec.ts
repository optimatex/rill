import {
  mockMenuMap,
  mockMenuIconsMap,
  mockMenuTitlesMap,
  mockMenupathsMap,
  mockMenuRawScheme_1,
  mockNavMenuScheme_1,
} from 'test';
import { createMenuScheme, createNavMenuScheme } from '.';

describe('menuSchemeFactory', () => {
  it('createMenuScheme should produce proper menu scheme', () => {
    const res = createMenuScheme(
      mockMenuIconsMap,
      mockMenuTitlesMap,
      mockMenuMap,
    );

    expect(res).toEqual(mockMenuRawScheme_1);
  });

  it('createNavMenuScheme should produce proper menu scheme', () => {
    const res = createNavMenuScheme(
      mockMenuIconsMap,
      mockMenuTitlesMap,
      mockMenupathsMap,
      mockMenuMap,
    );

    expect(res).toEqual(mockNavMenuScheme_1);
  });
});
