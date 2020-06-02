import React, { Component } from 'react';
import './ImgStyles.scss';
import ImgStyle from './ImgStyle/ImgStyle';

class imgStyles extends Component{


    render(){

        const state = this.props.state;
      
         return <div className="ImgStyles">
                       <ImgStyle imgAnimation={this.props.imgAnimation} state={state}/>
                </div> 
    }

}

export default imgStyles;

