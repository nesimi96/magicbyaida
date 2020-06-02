import React, { Component } from 'react';
import './Loader.scss';
import LoaderImg from '../../assets/img/loader-logo.png';
import { Transition } from 'react-transition-group';

class Loader extends Component{
    render(){
        
        return <Transition in={this.props.isLoaderOpen} timeout={1000} mountOnEnter>
               {state => (
                    <div style={{
                        animation: this.props.loaderAnim ? 'loader 1s ease-in-out' : '',
                    }} className="Loader">
                        <div style={{
                        }} className="Loader-img-holder">
                            <img src={LoaderImg}></img>
                        </div>
                    </div>
               )}

              </Transition>

    }
}

export default Loader;



