import React, { Component } from 'react';
import './AboutMain.scss';
import AboutHeader from './AboutHeader/AboutHeader';
import ImgHolderOne from './ImgHolderOne/ImgHolderOne';
import ImgHolderTwo from './ImgHolderTwo/ImgHolderTwo';
import TextHolderOne from './TextHolderOne/TextHolderOne';
import TextHolderTwo from './TextHolderTwo/TextHolderTwo';
import TextHolderThree from './TextHolderThree/TextHolderThree';
import ChannelQuote from './ChannelQuote/ChannelQuote';

class AboutMain extends Component {

     state = {
         animation: false,
     }

     componentWillMount(){
        window.scrollTo(0, 0);
     }

     componentDidMount(){
        this.setState({ animation: true })
     }

    render(){

       const screenWidth = window.innerWidth;
        
        return <div className="AboutMain">
                     <AboutHeader />
                     <ImgHolderOne  animation={ this.state.animation }/>
                     <TextHolderOne screenWidth={screenWidth} animation={ this.state.animation }/>
                     <TextHolderTwo  screenWidth={screenWidth} animation={ this.state.animation }/>
                     <ImgHolderTwo screenWidth={screenWidth} animation={ this.state.animation }/>
                     <TextHolderThree />
                     <ChannelQuote screenWidth={screenWidth} animation={ this.state.animation }/> 
               </div>
    }
}

export default AboutMain;