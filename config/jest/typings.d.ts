declare namespace jest {
  interface AsymmetricMatcher {
    $$typeof: any;
    sample?: string | RegExp | any | Array<any> | any;
  }
  // throws an error because the non native version has it also defined, so just comment it
  // type Value = string | number | RegExp | AsymmetricMatcher | undefined

  interface Options {
    media?: string;
    modifier?: string;
    supports?: string;
  }

  interface Matchers<R> {
    toHaveStyleRule(property: string, value?: any, options?: Options): R;
    toHaveTextContent(text: string, value?: any, options?: Options): R;
    toHaveClass(className: string, value?: any, options?: Options): R;
    toHaveAttribute(className: string, value?: any, options?: Options): R;
    toBeInTheDocument(): R;
  }
}
