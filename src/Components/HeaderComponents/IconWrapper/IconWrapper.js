import React, { Component } from 'react';
import './IconWrapper.scss';
import ArrowDown from '../../../assets/SVG/ArrowDown/ArrowDown';

class IconWrapper extends Component {
    
    test = () => {
        console.log('clicked')
        //window.scrollTo(0, 710);
        window.scroll({
            top: window.innerWidth < 600 ? 550 : 710, 
            left: 0, 
            behavior: 'smooth' 
          });
   }

    render(){


    return <div onClick={ this.test } className="IconWrapper">
                <ArrowDown />
           </div>
    }

}

export default IconWrapper;