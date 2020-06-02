import React, { Component } from 'react';
import styled from 'styled-components'
import HeaderImg from '../../../assets/img/header-img.jpg';
import HeaderImgMobile from '../../../assets/img/header-img-mobile.jpg';
import { Transition } from 'react-transition-group';

class BackgroundWrapper extends Component {

    
    render(){

        const width = window.innerWidth;
        let img = null;
        img = width > 600 ? HeaderImg : HeaderImgMobile

    
        return(
              <ImgWrapper > 
                   <img  src={ img }></img>
             </ImgWrapper>
        )
    }
}



export default BackgroundWrapper;


const ImgWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
z-index: -50;

& img {
    width: 100%;
    height: 100%;
    transition: all 5s ease-in-out;
}
`;