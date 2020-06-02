import React, { Component } from 'react';
import './PortofolioMain.scss';
import ImgsWrapper from '../../Components/PortofolioMainComponents/ImgsWrapper/ImgsWrapper';
import HeadersWrapper from '../../Components/PortofolioMainComponents/HeadersWrapper/HeadersWrapper';
import Popup from '../../assets/Popup/Popup';
import Slider from '../../Components/PortofolioMainComponents/Slider/Slider';
import Videos from '../../Components/PortofolioMainComponents/Videos/Videos';


class PortofolioMain extends Component {

        state = {
            popUpOpen: false,
            openingImg: null,
            openingImgIndex: null,
            imgData: null,
            animeImg: null,
        }

        componentWillMount(){
                window.scrollTo(0, 0);
                this.setState({ animeImg: true })
        }

        openPopUpHandler = (img, imgData, index) => {
            this.setState({ popUpOpen: true, openingImg: img, imgData: imgData, openingImgIndex: index });
        }

        closePopUpHandler = () => {
            this.setState({ popUpOpen: false });
        }

        leftHandler = () => {
          if(this.state.openingImgIndex > 0){
              this.setState(prevState => ({openingImgIndex: prevState.openingImgIndex - 1}))
              
              const curInd = this.state.openingImgIndex - 1;
              const newPhoto = this.state.imgData[curInd].img;
              this.setState({ openingImg: newPhoto })
          }

        }

        rightHandler = () => {

            if(this.state.openingImgIndex < (this.state.imgData.length - 1)){
                this.setState(prevState => ({openingImgIndex: prevState.openingImgIndex + 1}))
                
                const curInd = this.state.openingImgIndex + 1;
                const newPhoto = this.state.imgData[curInd].img;
                this.setState({ openingImg: newPhoto })
            }

        }

        render(){

    
        let slider = null;
        slider = this.state.popUpOpen ? <Slider openingImg={this.state.openingImg} 
               closePopUp={this.closePopUpHandler} leftHandler={this.leftHandler}
               rightHandler={this.rightHandler} sliderLength={this.state.imgData.length} 
               curInd={this.state.openingImgIndex}/> : null;

        return <React.Fragment>
                    <div className="PortofolioMain">
                        <Popup popUpState={this.state.popUpOpen}/>
                        <HeadersWrapper />
                        <ImgsWrapper animeImg={this.state.animeImg} openPopUp={this.openPopUpHandler}/>
                        { slider }
                    </div>
                    <Videos />
               </React.Fragment>
    }
}

export default PortofolioMain

//<iframe src="https://www.youtube.com/embed/pNY5EZCmuLM?start=326" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
