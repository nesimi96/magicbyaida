import React from 'react';
import './Button.scss';

const button = (props) => {
return <button onClick={props.click} style={props.style} className="Button">{props.content}</button>
}

export default button;