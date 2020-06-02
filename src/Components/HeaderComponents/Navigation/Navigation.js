import React, { Component } from 'react';
import Hamburger from './Hamburger/Hamburger';
import NavigationWrapper from './NavigationWrapper/NavigationWrapper';
import Popup from '../../../assets/Popup/Popup';

class Navigation extends Component {

   state = {
       navigationOpen: false,
   }

   componentWillMount(){
    if(this.props.toolbarNavigationOpen){
        console.log(this.props.navigationOpen)
        this.setState({ navigationOpen: true })
    }
   }

   navigationOpeningHandler = () => {
       this.setState( ({navigationOpen: true}))
   }

   navigationClosingHandler = () => {
    this.setState( ({navigationOpen: false}))
}

   redirectFromHeaderHandler = (route) => {
       let router = this.props.routeObj.routeObj.history;
       
       router.push(route)
   }


    render(){
        
   let hamburger = <Hamburger click={ this.navigationOpeningHandler }
      navState={ this.state.navigationOpen }  />
        if(this.props.routeObj === '/about'){
            hamburger = null;
        }

        return (
            <React.Fragment>
                { hamburger }
                <NavigationWrapper  click={ this.navigationClosingHandler } navState={ this.state.navigationOpen }  
   redirectClick={ this.redirectFromHeaderHandler }/>
                <Popup navState={ this.state.navigationOpen } click={ this.navigationClosingHandler }/>
            </React.Fragment>
            )
    }
}

export default Navigation;