import { Size } from '@types';

export const sphere = (size: Size, color?: string) => ({
  name: 'media-record',
  size: 24,
});

export const backward = (size: Size, color?: string) => ({
  name: 'media-rewind1',
  size: 22,
  possition: { bottom: 1.5, right: 1.5 },
});

export const play = (size: Size, color?: string) => ({
  name: 'media-play1',
  size: 24,
  possition: { left: 1.5 },
});

export const forward = (size: Size, color?: string) => ({
  name: 'media-fast-forward1',
  size: 22,
  possition: { bottom: 1.5, left: 1.5 },
});

export const equalizer = (size: Size, color?: string) => ({
  name: 'equalizer2',
  size: 14,
  possition: { bottom: 0.5, left: 0.5 },
});

export const navPanel = (size: Size, color?: string) => ({
  name: 'browser4',
  size: 14,
});

export const form = (size: Size, color?: string) => ({
  name: 'edit3',
  size: 18,
});

export const connection = (size: Size, color?: string) => ({
  name: 'shareable',
  size: 17,
});

export const gallery = (size: Size, color?: string) => ({
  name: 'pictures',
  size: 19,
});
