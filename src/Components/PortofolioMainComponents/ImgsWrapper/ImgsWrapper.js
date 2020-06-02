import React, { Component } from 'react';
import './ImgsWrapper.scss';

import Img1 from '../../../assets/img/portofolio-1.jpg';
import Img1Small from '../../../assets/img/portofolio-1-small.jpg';
import Img2 from '../../../assets/img/portofolio-2.jpg';
import Img2Small from '../../../assets/img/portofolio-2-small.jpg';
import Img3 from '../../../assets/img/portofolio-3.jpg';
import Img3Small from '../../../assets/img/portofolio-3-small.jpg';
import Img4 from '../../../assets/img/portofolio-4.jpg';
import Img4Small from '../../../assets/img/portofolio-4-small.jpg';
import Img5 from '../../../assets/img/portofolio-5.jpg';
import Img5Small from '../../../assets/img/portofolio-5-small.jpg';
import Img6 from '../../../assets/img/portofolio-6.jpg';
import Img6Small from '../../../assets/img/portofolio-6-small.jpg';
import Img7 from '../../../assets/img/portofolio-7.jpg';
import Img7Small from '../../../assets/img/portofolio-7-small.jpg';
import Img8 from '../../../assets/img/portofolio-8.jpg';
import Img8Small from '../../../assets/img/portofolio-8-small.jpg';
import Img9 from '../../../assets/img/portofolio-9.jpg';
import Img9Small from '../../../assets/img/portofolio-9-small.jpg';
import RedirectWraper from '../../../Components/PortofolioComponents/MainWrapper/RedirectWrapper/RedirectWrapper';
import ImgStyles from './ImgStyles/ImgStyles';
import { Transition }from 'react-transition-group';

class ImgsWrapper extends Component {

     state = {
         isActiveFirst: true,
         isActiveSecond: null,
         isActiveThird: null,
     }

     componentDidMount(){
        if(window.innerWidth < 750){
            this.setState({ isActiveSecond: true, isActiveThird: true})
        }
     }


    render(){

        const first = this.state.isActiveFirst;
        const second = this.state.isActiveSecond;
        const third = this.state.isActiveThird;

        const style = {
            width: '100%',
            height: '100%'
        }

        const width = window.innerWidth;

        const imgData = [
            {img: width > 600 ? Img1 : Img1Small, class: 'ImgWrapper ImgWrapper-1', isActive: first},
            {img: width > 600 ? Img2 : Img2Small, class: 'ImgWrapper ImgWrapper-2', isActive: first},
            {img: width > 600 ? Img3 : Img3Small, class: 'ImgWrapper ImgWrapper-3', isActive: first},
            {img: width > 600 ? Img4 : Img4Small, class: 'ImgWrapper ImgWrapper-4', isActive: first},
            {img: width > 600 ? Img5 : Img5Small, class: 'ImgWrapper ImgWrapper-5', isActive: second},
            {img: width > 600 ? Img6 : Img6Small, class: 'ImgWrapper ImgWrapper-6', isActive: second},
            {img: width > 600 ? Img7 : Img7Small, class: 'ImgWrapper ImgWrapper-7', isActive: second},
            {img: width > 600 ? Img8 : Img8Small, class: 'ImgWrapper ImgWrapper-8', isActive: third},
            {img: width > 600 ? Img9 : Img9Small, class: 'ImgWrapper ImgWrapper-9', isActive: third}
    ]

    window.addEventListener('scroll', () => {
        const pixels = window.scrollY;

        if(pixels > 270 && this.state.isActiveSecond === null){
            this.setState({ isActiveSecond: true })
        }else if (pixels > 650 && this.state.isActiveThird === null){
            this.setState({ isActiveThird: true})
        }

    })

    
    const imgs = imgData.map((cur, ind) => {


          return <Transition in={this.props.animeImg} timeout={500} mountOnEnter>
              {state => (
                <div onClick={() => this.props.openPopUp(cur.img, imgData, ind)} className={cur.class}>
                    <ImgStyles imgAnimation={cur.isActive} state={state} />
                    <RedirectWraper style={style} /> 
                    <img src={cur.img} alt="Magic by Aida portofolio" /> 
                </div>
               )} 
    
                </Transition>
       })


        return imgs

    }

}

export default ImgsWrapper
