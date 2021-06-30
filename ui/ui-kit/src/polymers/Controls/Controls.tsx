import { React } from '_employee/view';
import { Row, Buticon } from 'atoms';

import { IMenuFullScheme } from '@types';

interface IProps {
  scheme: IMenuFullScheme[];
}
export const Controls = ({ scheme }: IProps) => (
  <Row type="pipe">
    {scheme.map((item: IMenuFullScheme) => (
      <Buticon
        icon={item.icon}
        onClick={item.handler}
        data-testid={`grip-${item.key}`}
        key={item.key}
      />
    ))}
  </Row>
);
