import { getTheme, getThemeContext } from 'test';

import {
  button,
  buttonRule,
  card,
  cardRule,
  surface,
  surfaceRule,
  setButton,
  setCard,
  setSurface,
} from '.';

describe('theme', () => {
  it('button setters', () => {
    const newVal = {
      background: 'grey',
      color: 'black',
    };
    const newTheme = setButton(newVal, getTheme());

    expect(newTheme.button).toEqual(newVal);
  });
  it('button getters', () => {
    // get int
    expect(button(getThemeContext())).toEqual({
      background: 'red',
      color: 'white',
    });
    // as direct call
    expect(buttonRule('background', getThemeContext())).toBe('red');
  });

  // card
  it('card setters', () => {
    const newVal = {
      background: 'grey',
      color: 'black',
    };
    // @ts-ignore
    const newTheme = setCard(newVal, getTheme());

    expect(newTheme.card).toEqual(newVal);
  });
  it('card getters', () => {
    // get int
    expect(card(getThemeContext())).toEqual({
      background: 'red',
      color: 'white',
    });
    // as direct call
    expect(cardRule('background', getThemeContext())).toBe('red');
  });

  // surface
  it('surface setters', () => {
    const newVal = {
      background: 'grey',
      color: 'black',
    };
    // @ts-ignore
    const newTheme = setSurface(newVal, getTheme());

    expect(newTheme.surface).toEqual(newVal);
  });
  it('surface getters', () => {
    // get int
    expect(surface(getThemeContext())).toEqual({
      background: 'red',
      color: 'white',
    });

    const rule = surfaceRule('background', getThemeContext());

    expect(rule).toBe('red');
  });
});
