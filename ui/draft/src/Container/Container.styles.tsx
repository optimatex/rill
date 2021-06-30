import { styled } from '_employee/view';

export const StyledWrap = styled.div.attrs({
  'data-testid': 'text-editor-wrap',
})`
  width: 100%;
  padding: 10px;

  .public-DraftEditor-content {
    margin-bottom: 10px;
  }
`;
