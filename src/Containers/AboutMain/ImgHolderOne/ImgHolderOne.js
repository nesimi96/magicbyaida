import React from 'react';
import './ImgHolderOne.scss';
import AboutImgOne from '../../../assets/img/about-pic-1.jpg';
import AboutImgOneSmall from '../../../assets/img/about-pic-1-small.jpg';
import { Transition } from 'react-transition-group';

const imgHolderOne = (props) => {

    const width = window.innerWidth;
    let img = null;
    img = width > 600 ? AboutImgOne : AboutImgOneSmall;

    return <Transition in={props.animation} timeout={500} mountOnEnter unmountOnExit>
           {state => (
            <figure className="ImgHolderOne" 
            style={{animation: state === 'entering' ? 'imgOne .5s ease-in-out' : '' }}>
                         <div className="ImgHolderOne-cover" 
            style={{width: state === 'entered' ? 0 : '100%'}}></div>
                         <img src={img} alt="Magic By Aida about image slika" ></img>
            </figure>
           )}

          </Transition>
}

export default imgHolderOne;
