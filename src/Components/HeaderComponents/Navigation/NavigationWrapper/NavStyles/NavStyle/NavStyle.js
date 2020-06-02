import React from 'react';
import './NavStyle.scss'

const NavStyle = (props) => {

    const state = props.state;
    const data = ['.6s', '.55s', '.5s', '.45s', '.4s', '.35s', '.3s', '.25s'];
    const items = data.map(cur => {
        return  <div style={{ animation: state === 'entered' ? `items ${cur} ease-in-out` : `items2 ${cur} ease-in-out`,
        height: state === 'entered' ? '100%' : '0'
        
        }} className="NavStyle" key={ cur }></div>
        
    })

    return items
}

export default NavStyle;

