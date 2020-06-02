import React from 'react';
import './CallBox.scss';
import Phone from '../../../assets/SVG/Phone/Phone';


const callBox = () => {

     return  <a className="CallBox" href="tel:033 874-291">
                 <div className="CallBox-1"></div>
                 <div className="CallBox-2"></div>
                 <Phone/>
              </a>
            

}

export default callBox;
