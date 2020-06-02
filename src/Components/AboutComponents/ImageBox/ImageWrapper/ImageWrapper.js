import React, {Component} from 'react';
import './ImageWrapper.scss';
import AboutImg from '../../../../assets/img/header-img.jpg';
import AboutImgSmall from '../../../../assets/img/header-img-mobile.jpg';
import { Transition } from 'react-transition-group';


class imageWrapper extends Component {

    state = {
        renderImage: null,
    }

    render() {

        window.addEventListener('scroll', () => {
            const pixels = window.scrollY;

            if(pixels > 300 & pixels < 1200 & this.state.renderImage === null){
                this.setState({ renderImage: true })
            }
        })

        const width = window.innerWidth;
        let img = null;
        img = width > 600 ? AboutImg : AboutImgSmall

    return <Transition in={this.state.renderImage} timeout={750} mountOnEnter>
               {state => (
                <div className="ImageWrapper" style={{animation: state === 'entering' ? 'imageWrapper .75s ease-in-out' : '' }}>
                 <div className="ImageWrapper-cover" style={{width: state === 'entered' ? '0' : '100%' }}></div>
                <img src={img} alt="About Magic By Aida "></img>
                </div>
               )}
            
          </Transition>
    }
}

export default imageWrapper;