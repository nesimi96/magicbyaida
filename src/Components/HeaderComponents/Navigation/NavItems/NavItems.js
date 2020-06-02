import React, { Component } from 'react';
import './NavItems.scss';
import NavItem from './NavItem/NavItem';
import { Transition } from 'react-transition-group';

class NavItems extends Component{

     render(){

      let navigationState = null;
      let redirectHandler = null;
      navigationState = this.props.navState ? this.props.navState : this.props.toolNavState;
      redirectHandler = this.props.redirectClick ? this.props.redirectClick : this.props.toolbarRedirectHandler;


          return  (
                     <Transition in={ navigationState } timeout={1000} mountOnEnter unmountOnExit>
                          {state => (
                         <div className="NavItems" > 
                              <NavItem click={this.props.click} navState={navigationState} state={state}
                              redirectClick={redirectHandler}/>
                         </div>
                          )}
                        
      
                     </Transition>
              )
     }
    
}

export default NavItems;