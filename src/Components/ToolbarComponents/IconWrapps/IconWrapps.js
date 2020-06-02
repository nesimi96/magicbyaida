import React from 'react';
import './IconWrapps.scss';
import Instagram from '../../../assets/SVG/Instagram/Instagram';
import Facebook from '../../../assets/SVG/Facebook/Facebook';

const iconWrapps = () => {

    

     const iconStyle = {

        style: `fill: white;
        width: 1.05rem;
        height: 1.05rem;
        cursor: pointer;
        transition: all .35s ease-in;

        &:hover {
            transform: rotate(360deg) scale(1.05);
        }`
     }


    return <div className="IconWrapps">            
        <a href="https://www.instagram.com/magic_by_aida/" target="_blank"><Instagram iconStyle={ iconStyle }/></a>
        <a href="https://www.facebook.com/magicbyaida/" target="_blank"><Facebook iconStyle={ iconStyle }/></a>
           </div>;
}

export default iconWrapps;
