import React, { Component } from 'react';
import styled from 'styled-components'
import './Header.scss';
import BackgroundWrapper from '../../Components/HeaderComponents/BackgroundWrapper/BackgroundWrapper';
import Navigation from '../../Components/HeaderComponents/Navigation/Navigation';
import HeaderTextWrapper from '../../Components/HeaderComponents/HeaderTextWrapper/HeaderTextWrapper';
import IconWrapper from '../../Components/HeaderComponents/IconWrapper/IconWrapper';
import CallBox from '../../Components/HeaderComponents/CallBox/CallBox';


class Header extends Component {
       
    componentDidMount(){
        window.scrollTo(0, 0);
      }


    render(){

        const routeObj = this.props

        return <header className="Header"> 
                  <BackgroundWrapper />
                  <Navigation routeObj={routeObj}/>
                  <IconWrapper />
                  <CallBox />
                  <HeaderTextWrapper/>
               </header>
    }
}

export default Header;



