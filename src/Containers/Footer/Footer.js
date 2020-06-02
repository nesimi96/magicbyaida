import React, { Component } from 'react';
import './Footer.scss';
import MainBox from './MainBox/MainBox';

class Footer extends Component {

    componentDidMount(){
      window.scrollTo(0, 0);
    }

     footerRedirectHandler = (route) => {
       this.props.routeObj.history.push(route);
     }

    render(){

        return <footer className="Footer">
                   <MainBox routeObj={this.props.routeObj} click={this.footerRedirectHandler} />
               </footer>
    }
}

export default Footer;