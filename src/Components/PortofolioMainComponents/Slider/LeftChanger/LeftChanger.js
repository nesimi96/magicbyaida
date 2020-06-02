import React from 'react';
import styled from 'styled-components';
import './LeftChanger.scss';
import ArrowLeft  from '../../../../assets/SVG/ArrowRight/ArrowRight';


const leftChanger = (props) => {

    const leftChanger = {
        fill: 'white',
        transform: 'rotate(135deg)',
    }

    return <div onClick={props.leftHandler} className="LeftChanger">
               <ArrowLeft style={leftChanger} />
           </div>
}

export default leftChanger;

