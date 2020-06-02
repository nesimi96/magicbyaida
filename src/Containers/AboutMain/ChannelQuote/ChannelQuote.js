import React from 'react';
import './ChannelQuote.scss';
import { Transition } from 'react-transition-group';

const ChannelQuote = (props) => {

    const timeout = props.screenWidth > 600 ? 1000 : 0;

     return <Transition in={props.animation} timeout={timeout} mountOnEnter >
            {state => (

            <div className="ChannelQuote">
                <p style={{display: state === 'entered' ? 'block' : 'none',
                animation: state === 'entered' ? 'para .7s ease-in-out' : ''}}>
                “A woman who cuts her hair is about to change her life.” </p>
                <h6 style={{display: state === 'entered' ? 'block' : 'none',
                animation: state === 'entered' ? 'head .7s ease-in-out' : ''}}>- Coco Chanel</h6>
            </div>

            )}

           </Transition>

}

export default ChannelQuote;


/*



*/