import { React, styled } from '_employee/view';
import { postContainerCss, postTitleCss } from '_employee/style-kit';

import { IPostProps } from '@types';
import { getTestId, withDefaultId, postId } from 'utils';
import { H3 } from 'atoms';

export const PostContainer = styled.div`
  ${postContainerCss}
`;

export const PostTitle = styled.div`
  ${postTitleCss}
`;

export const Post = (props: IPostProps) => (
  <PostContainer data-testid={getTestId(props)}>
    {props.title ? (
      <PostTitle>
        <H3>{props.title}</H3>
      </PostTitle>
    ) : null}

    {props.children}
  </PostContainer>
);
withDefaultId(postId, Post);
