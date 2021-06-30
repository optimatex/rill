import { React } from '_employee/react';

import { PlainRender, IContainerProps } from '@types';

type UnknownError = unknown;

interface IProps extends IContainerProps {
  renderFallback: PlainRender;
  scope: string;
  onError: (scope: string, error: UnknownError) => void;
}

interface IState {
  error: UnknownError;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  public state = {
    error: false,
  };

  public handleRestore = () => {
    this.setState({
      error: null,
    });
  };

  static getDerivedStateFromError(error: UnknownError) {
    return {
      error,
    };
  }

  public componentDidCatch(error: UnknownError) {
    this.props.onError(this.props.scope, error);
  }

  public render() {
    return this.state.error ? this.props.renderFallback() : this.props.children;
  }
}

export default ErrorBoundary;
