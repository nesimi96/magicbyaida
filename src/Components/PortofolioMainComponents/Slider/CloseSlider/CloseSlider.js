import React from 'react';
import './CloseSlider.scss';

const closeSlider = (props) => {
    return <div onClick={props.closePopUp} className="CloseSlider">
               <div className="line line-1"></div>
               <div className="line line-2"></div>
          </div>
}

export default closeSlider