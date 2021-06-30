import { React } from '_employee/view';
import { render, text_1, cardSR } from 'test';
import { postIdKey } from 'utils';
import { Post } from '.';

const props_1 = {
  title: text_1,
};

const draw = (props = {}) =>
  render(
    <Post {...props}>
      <button>button text</button>
    </Post>,
  );

describe('Post', () => {
  it('should render without errors', () => {
    const { getByTestId } = draw(props_1);
    const el = getByTestId(postIdKey);

    expect(el).toMatchSnapshot();
  });

  it('should render post title', () => {
    const { getByRole } = draw(props_1);
    const el = getByRole('heading');

    expect(el).toMatchSnapshot();
  });

  it('should render post body', () => {
    const { getByRole } = draw();
    const el = getByRole('button');

    expect(el).toMatchSnapshot();
  });

  it('card body should contains all style rules', () => {
    const { getByTestId } = draw();
    const el = getByTestId(postIdKey);

    expect(el).toHaveStyleRule('background', cardSR.background);
  });
});

// it('card title should contains all style rules', () => {
//   const { getByRole } = draw();
//   const el = getByRole('heading');

//   expect(el).toHaveStyleRule('font-size', fontSR.fontSize);
// });

// it('card title should contains all style rules', () => {
//   const { getByRole } = draw();
//   const el = getByRole('heading');

//   expect(el).toHaveStyleRule('font-size', fontSR.fontSize);
// });

// it('card body should contains all style rules', () => {
//   const { getByText } = draw_content_card();
//   const el = getByText(text_2);

//   expect(el).toHaveStyleRule('background', cardSR.background);
// });
