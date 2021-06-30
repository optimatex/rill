import { font } from 'content';

export const outline = {
  borderRadius: 4,
};

export const frame = {
  sideIndent: 10,
  verticalIndent: 10,
  rowGap: 18,
  columnGap: 10,
};

export const tidySidebarFrame = {
  sideIndent: 8,
  verticalIndent: 6,
  rowGap: 18,
  columnGap: 14,
};

export const layout = {
  rowGap: 18,
  columnGap: 18,
};

export const column = {
  maxWidth: 560,
};

export const sidebarColumn = {
  maxWidth: 150,
};

export const tidySidebarColumn = {
  maxWidth: 150,
};

export const tidySidebarPack = {
  frame: tidySidebarFrame,
  column: tidySidebarColumn,
};

export const shapePack = {
  layout,
  column,
  frame,
  font,
  outline,
};
