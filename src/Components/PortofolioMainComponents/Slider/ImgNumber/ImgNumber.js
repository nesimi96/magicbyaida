import React from 'react';
import './ImgNumber.scss';

const imgNumber = (props) => {
    return <div className="ImgNumber">
               <div>{props.curInd + 1}</div>
               <div>/</div>
               <div>{props.sliderLength}</div>
          </div>
}

export default imgNumber;