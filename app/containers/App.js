// @flow
import * as React from 'react';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

// TODO: Add border
  render() {
    return (
      <div className="appContainer">
        {this.props.children}
      </div>
    );
  }
}
