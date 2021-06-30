import { debounce } from '.';

// 🧲 How to: timeout timers

describe('createField', () => {
  it('should return proper item', () => {
    jest.useFakeTimers();

    const handler = jest.fn();

    const withDelay = debounce(5, handler);

    expect(typeof withDelay).toBe('function');

    withDelay();

    // should NOT call if less than passed in time
    setTimeout(() => {
      expect(handler).toHaveBeenCalledTimes(0);
    }, 4);

    // should call if same as passed in time
    setTimeout(() => {
      expect(handler).toHaveBeenCalledTimes(1);
    }, 5);

    jest.runAllTimers();
  });

  it('multiple calls of returned function should still results in ONLY 1 call', () => {
    jest.useFakeTimers();

    const handler = jest.fn();

    const withDelay = debounce(1, handler);

    expect(typeof withDelay).toBe('function');

    withDelay();
    withDelay();
    withDelay();
    withDelay();
    withDelay();

    // should call if same as passed in time
    setTimeout(() => {
      expect(handler).toHaveBeenCalledTimes(1);
    }, 1);

    jest.runAllTimers();
  });
});
