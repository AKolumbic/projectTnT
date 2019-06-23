import * as React from 'react';

interface IProps {
  name?: string;
}

const DummyComponent: React.FC<IProps> = (props: IProps) => (
  <h1>Hello, {props.name}! Welcome to React and TypeScript.</h1>
)

DummyComponent.defaultProps = {
  name: 'world',
};

export default DummyComponent
