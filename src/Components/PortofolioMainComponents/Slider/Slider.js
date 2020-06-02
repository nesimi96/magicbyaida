import React from 'react';
import './Slider.scss';
import ImageHolder from './ImageHolder/ImageHolder';
import CloseSlider from './CloseSlider/CloseSlider';
import ImgNumber from './ImgNumber/ImgNumber';
import LeftChanger from './LeftChanger/LeftChanger';
import RightChanger from './RightChanger/RightChanger';

const slider = (props) => {
    return <div className="Slider">
                <CloseSlider closePopUp={props.closePopUp}/>
                <ImageHolder openingImg={props.openingImg}/>
                <ImgNumber sliderLength={props.sliderLength} curInd={props.curInd}/>
                <LeftChanger leftHandler={props.leftHandler} />
                <RightChanger rightHandler={props.rightHandler}/>
           </div>
}

export default slider;