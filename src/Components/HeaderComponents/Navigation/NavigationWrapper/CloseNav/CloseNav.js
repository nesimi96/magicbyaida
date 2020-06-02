import React from 'react';
import './CloseNav.scss';
import { Transition } from 'react-transition-group';

const closeNav = (props) => {

    let closeMethod = null;
    let closeNavShown = null;

    closeNavShown = props.navState ? props.navState : props.toolNavState;
    closeMethod = props.toolbarClose ? props.toolbarClose : props.click;
        
    return (
        <Transition in={closeNavShown} duration={0}>
            {state => (
                <div onClick={ closeMethod } className="CloseNav" style={{animation: state === 'entered' ?
            'closeNavAnime 1s ease-in-out' :  '', display: state === 'entered' ?
        'flex' : 'none'   }}></div>
            )}

        </Transition>
    )
}

export default closeNav;

