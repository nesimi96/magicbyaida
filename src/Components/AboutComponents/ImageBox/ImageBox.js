import React, { Component } from 'react';
import './ImageBox.scss';
import ImageWrapper from './ImageWrapper/ImageWrapper';
import { Transition } from 'react-transition-group';

class ImageBox extends Component {

    
    render () {
      
        return  <div className="ImageBox">
                   <ImageWrapper />
                 </div>
               
    }
}

export default ImageBox;