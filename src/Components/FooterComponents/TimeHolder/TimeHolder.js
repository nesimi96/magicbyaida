import React from 'react';
import './TimeHolder.scss';
import Time from '../../../assets/SVG/Time/Time';

const timeHolder = (props) => {

    const state = props.state;

    let time = null;
    time = window.innerWidth > 650 ? <Time /> : null;

    const style = {
        animation: state === 'entered' ? 'timeHolderAnim .4s ease-in-out' : '',
        display: state === 'entered' ? 'flex' : 'none',
    }

    return <div className="TimeHolder" style={ style }>
               { time }
               <p>pon-pet: <span>10:00 - 20:00h</span></p>
               <p>subota: <span>06:00 - 17:00h</span></p>
               <p>nedjelja: <span style={{ color: 'rgb(228, 94, 94)'}}>ne radimo</span></p>
          </div>
}

export default timeHolder;