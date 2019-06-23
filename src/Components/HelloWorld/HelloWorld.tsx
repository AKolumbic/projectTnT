import * as React from 'react'

interface IProps {
  name?: string;
}

const HelloWorld: React.FC<IProps> = (props: IProps) => (
  <h1>Hello, {props.name}! Welcome to React and TypeScript.</h1>
)

HelloWorld.defaultProps = {
  name: 'world',
}

export default HelloWorld
