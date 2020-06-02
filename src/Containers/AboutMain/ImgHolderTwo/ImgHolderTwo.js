import React from 'react';
import './ImgHolderTwo.scss';
import AboutImgTwo from '../../../assets/img/about-pic-2.jpg';
import AboutImgTwoSmall from '../../../assets/img/about-pic-2-small.jpg';
import { Transition } from 'react-transition-group';


const imgHolderTwo = (props) => {

    const timeout = props.screenWidth > 600 ? 500 : 1000;

    const width = window.innerWidth;
    let img = null;
    img = width > 600 ? AboutImgTwo : AboutImgTwoSmall;
        
    return <Transition in={props.animation} timeout={timeout} mountOnEnter unmountOnExit>
                {state => (
                <figure className="ImgHolderTwo" 
                style={{animation: state === 'entering' ? 'imgTwo .5s ease-in-out' : '' }}>
                            <div className="ImgHolderTwo-cover" 
                style={{width: state === 'entered' ? 0 : '100%'}}></div>
                            <img src={img} alt="Magic By Aida about image slika" ></img>
                </figure>
                )}
          </Transition>

}

export default imgHolderTwo;

/*


*/