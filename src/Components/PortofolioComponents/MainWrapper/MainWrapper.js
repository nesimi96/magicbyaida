import React, { Component } from 'react';
import './MainWrapper.scss';
import Portofolio from '../../../assets/img/portofolio-img.jpg';
import PortofolioSmall from '../../../assets/img/portofolio-img-small.jpg';
import RedirectWrapper from './RedirectWrapper/RedirectWrapper';
import { Transition } from 'react-transition-group';

class MainWrapper extends Component{

    state = {
        imageWrapper: null,
    }

     render(){
        window.addEventListener('scroll', () => {
            const screenWidth = window.innerWidth;
           let startPosition = null;
           let endPosition = null;
           startPosition = screenWidth > 900 ? 1200 : 700;
           endPosition = screenWidth > 900 ? 2000 : 1300;

            const pixels = window.scrollY;
            if (pixels > startPosition && pixels < endPosition && this.state.imageWrapper === null){
                this.setState({ imageWrapper: true })
            }
        })


        const width = window.innerWidth;
        let img = null;
        img = width > 600 ? Portofolio : PortofolioSmall;

        return <Transition in={this.state.imageWrapper} timeout={1000} mountOnEnter unmountOnExit>{state => (

                <div className="MainWrapper">
                    <div className="ImgHolder" style={{animation: state === 'entering' ? 'holderAnime 1s ease-in-out' : '0'}}>
                        <img src={img} alt={'Magic studio by Aida Balayage'}></img>
                        <RedirectWrapper click={this.props.click}/>
                        <div className="ImgHolder-backdrop" style={{width: state === 'entered' ? 
                  '0%' : '100%'  }}></div>
                    </div>
                </div>
        )}

              </Transition>
    }
}

export default MainWrapper;

