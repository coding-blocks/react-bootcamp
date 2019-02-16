import React from 'react';

/* funcational component
const Button = props => {
  const { onClick, text } = props;
  console.log('render button');

  return <button onClick={onClick}>{text}</button>;
};
*/

class Button extends React.Component {
  render() {
    const { onClick, text } = this.props;

    return <button onClick={onClick}>{text}</button>;
  }
}

export default Button;
