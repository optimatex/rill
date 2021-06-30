import { IconsMap, TitleMap, UrlPathMap } from '@types';

export const createMenuScheme = (
  iconsMap: IconsMap,
  titlesMap: TitleMap,
  map: string[],
) =>
  map.map((key: string) => ({
    key,
    icon: iconsMap[key],
    title: titlesMap[key],
  }));

export const createNavMenuScheme = (
  iconsMap: IconsMap,
  titlesMap: TitleMap,
  pathsMap: UrlPathMap,
  map: string[],
) =>
  map.map((key: string) => ({
    key,
    path: pathsMap[key],
    icon: iconsMap[key],
    title: titlesMap[key],
  }));
