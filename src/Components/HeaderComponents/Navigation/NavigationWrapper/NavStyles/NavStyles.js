import React from 'react';
import './NavStyles.scss';
import { Transition } from 'react-transition-group';
import NavStyle from './NavStyle/NavStyle';

const navStyles = (props) => {

    
     let animationState = null;
     animationState = props.navState ? props.navState : props.toolNavState;


     return (
         
         <Transition in={animationState} timeout={1000} >
            {state => (

                <div style={{animation: state === 'entered' ?
            'navwrapp 1s ease-in-out' : '', backgroundColor: window.innerWidth < 600 ? 'white' : 'transparent',
            animation: 'wrapperAnime .7s ease-in', columnGap: state === 'entered' ? '0rem' : '1rem'
        }} className="Wrapper" >
                <NavStyle state={state}/>
                </div>
            )
            
        }
        </Transition>
    )
}

export default navStyles

