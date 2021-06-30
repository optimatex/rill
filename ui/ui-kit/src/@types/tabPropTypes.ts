import { INavMenuProps } from './controllsPropTypes';
import { ITrivialLayoutProps } from './appLayout';

type TabContent = JSX.Element;

export interface ITabsProps extends INavMenuProps, ITrivialLayoutProps {
  contentMap: TabContent;
}
