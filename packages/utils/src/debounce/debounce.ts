type Handler = (...args: any[]) => any;

export const debounce = (time: number, handler: Handler) => {
  let timer: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(timer);

    timer = setTimeout(handler, time);
  };
};
