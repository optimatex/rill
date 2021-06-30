import { lensProp, view, set } from '_employee/utils';

import { ITagProps, TestIdSetter } from '@types';

// @ts-ignore
export const testId = lensProp('data-testid');

export const getTestId = view(testId);
export const setTestId = set(testId);

type testIdPack = [id: string, setter: TestIdSetter];
// @ts-ignore
export const makeTestId = (id: string): testIdPack => [id, setTestId(id)];

export const passTestId = (props: ITagProps) => setTestId(getTestId(props), {});
