import React from 'react';
import './NavWrapp.scss';
import NavItems from './NavItems/Navitems';

const navWrapp = (props) => {
    const state = props.state;

    return <nav className="NavWrapp" style={{ opacity: state === 'entered' ? 1 : 0}}>
                <NavItems click={props.click}/>
          </nav>
}

export default navWrapp;