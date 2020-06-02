import React from 'react';
import './TextBox.scss';
import TextWrapper from './TextWrapper/TextWrapper';

const textBox = (props) => {
    return <div className="TextBox">
                <TextWrapper click={props.click}/>
            </div>
}

export default textBox;