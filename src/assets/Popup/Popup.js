import React from 'react';
import './Popup.scss';
import { Transition } from 'react-transition-group';

const popup = (props) => {

     let popUpState = null;
     popUpState = props.navState ? props.navState : props.popUpState;

   
    return <Transition in={popUpState} timeout={0} mountOnEnter unmountOnExit>
           {state => (
                <div onClick={props.click} className="Popup" style={{display: 'block', 
               backgroundColor: props.navState ? 'rgba(0, 0, 0, .3)' : 'rgba(0, 0, 0, 1)'}}></div>
           )}
          </Transition>

}
export default popup;

