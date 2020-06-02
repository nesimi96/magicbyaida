import React, {Component} from 'react';
import './NavigationWrapper.scss';
import { Transition } from 'react-transition-group';
import NavStyles from './NavStyles/NavStyles';
import NavItems from '../NavItems/NavItems';
import CloseNav from './CloseNav/CloseNav'; 

class NavigationWrapper extends Component{

    render(){

        
        let navState = null;
        navState = this.props.navState ? this.props.navState : this.props.toolNavState
       
        return (
            
            <Transition in={navState} timeout={1000} mountOnEnter unmountOnExit>
                {state => (
                     <nav className="NavigationWrapper" style={{
                animation: navState && window.innerWidth < 600 ? 'navwrapp 1s ease-in-out' : '',
                backgroundColor: window.innerWidth < 600 ? 'white' : 'transparent'
                     }}>
                         <NavStyles navState={ navState }/>

                         <NavItems click={ this.props.click } navState={ navState } 
                         redirectClick={this.props.redirectClick}/>

                         <CloseNav  click={ this.props.click } navState={ navState }/>
                     </nav>
                )}
            </Transition>
        )
    }
}

export default NavigationWrapper