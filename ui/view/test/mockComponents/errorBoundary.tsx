import * as React from 'react';

interface IProps {
  errorText: string;
  properText: string;
}

export const ProblemChild = (props: IProps) => {
  const onClick = () => {
    throw new Error(props.errorText);
  };

  return <button onClick={onClick}>{props.properText}</button>;
};

export const Fallback = () => <div data-testid="test-fallback">Fallback</div>;
