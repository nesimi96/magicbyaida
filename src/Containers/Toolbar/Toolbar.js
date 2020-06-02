import React, { Component } from 'react';
import './Toolbar.scss';
import NavWrapp from '../../Components/ToolbarComponents/NavWrapp/NavWrapp';
import IconWrapps from '../../Components/ToolbarComponents/IconWrapps/IconWrapps';
import { Transition } from 'react-transition-group';
import ToolbarImgHolder from './ToolbarImgHolder/ToolbarImgHolder';
import ToolbarHamburger from '../../Components/ToolbarComponents/ToolbarHamburger/ToolbarHamburger';
import ToolbarNavigation from '../../Components/ToolbarComponents/ToolbarNavigation/ToolbarNavigation';

class Toolbar extends Component {

        state = {
            toolbarShown: false,
            navigationOpen: false,
        }

    
        // When toolbar will be shown
       componentDidMount(){
         if (this.props.routeObj.match.url === '/about' || 
             this.props.routeObj.match.url === '/portofolio' ||
             this.props.routeObj.match.url === '/info'){
             this.setState({ toolbarShown: true })
         }
      }

  
      // redirect to some route
      toolbarRedirectHandler = (route) => {
        this.setState({ navigationOpen: false })
        this.props.routeObj.history.push(route)
      }

      toolbarNavigationOpen = () => {
        this.setState({ navigationOpen: true})
      }

      toolbarNavigationCloseHandler = () => {
        this.setState({ navigationOpen: false })
  
      }


    
    render(){

      let toolbarNavigation = null;
      toolbarNavigation = this.state.navigationOpen ? 
      <ToolbarNavigation toolNavState={this.state.navigationOpen} 
                         toolbarNavigationCloseHandler={ this.toolbarNavigationCloseHandler }
                         toolbarRedirectHandler={ this.toolbarRedirectHandler } /> 
      : null;



    // IF WE ARE ON HOME PAGE
     if(this.props.routeObj.match.url === '/'){

        window.addEventListener('scroll', () => {
          const pixels = window.scrollY;
    
          if(pixels < 700 && this.state.toolbarShown === true){
              this.setState({ toolbarShown: false })
          } else if(pixels > 700 && this.state.toolbarShown === false){
            this.setState({ toolbarShown: true })
          }
      
        })

     }

  
       const toolbarShown = this.state.toolbarShown;
       
      

      
        return <Transition in={toolbarShown} timeout={0} mountOnEnter unmountOnExit>
            {state => (
              <React.Fragment>
                     { toolbarNavigation }
                     <div className="Toolbar" style={{height: state === 'entered' ? '8%' : '0'}}>
                     <ToolbarImgHolder click={this.toolbarRedirectHandler}/>
                     <ToolbarHamburger click={this.toolbarNavigationOpen} />
                     <NavWrapp click={this.toolbarRedirectHandler} state={state}/>
                     <IconWrapps state={state}/>

                 </div>
              </React.Fragment>
            )}
               
        </Transition>
    }
}

export default Toolbar;

