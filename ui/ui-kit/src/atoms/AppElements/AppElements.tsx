import { FC, styled } from '_employee/view';
import {
  appLayoutCss,
  screenCss,
  sidebarColumnCss,
  flatColumnCss,
  mainColumnCss,
} from '_employee/style-kit';

import { ITrivialLayoutProps } from '@types';
import { withDefaultId, layoutId, columnId, screenId } from 'utils';

export const AppLayout = styled.div`
  ${appLayoutCss}
`;
withDefaultId(layoutId, AppLayout);

export const TrivialAppLayout = styled.div`
  ${appLayoutCss}

  & > * {
    padding-top: ${(props: ITrivialLayoutProps) => `${props.topOffset}`}px;
  }
` as FC<ITrivialLayoutProps>;
withDefaultId(layoutId, TrivialAppLayout);

export const Screen = styled.div`
  ${screenCss}
`;
screenId(Screen);

export const SidebarFlatColumn = styled.div`
  ${flatColumnCss}
`;
withDefaultId(columnId, SidebarFlatColumn);

export const SidebarColumn = styled.div`
  ${sidebarColumnCss}
`;
withDefaultId(columnId, SidebarColumn);

export const ContentColumn = styled.div`
  ${mainColumnCss}
`;
withDefaultId(columnId, ContentColumn);
