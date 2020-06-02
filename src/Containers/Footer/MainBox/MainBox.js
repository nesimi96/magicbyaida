import React, { Component } from 'react';
import './MainBox.scss';
import TimeHolder from '../../../Components/FooterComponents/TimeHolder/TimeHolder';
import Info from '../../../Components/FooterComponents/Info/Info';
import FooterNav from '../../../Components/FooterComponents/FooterNav/FooterNav';
import { Transition } from 'react-transition-group';

class MainBox extends Component {

    state = {
        mainBoxState: null,
    }


    render(){

        window.addEventListener('scroll', () => {
            let pixels = window.scrollY;
            let width = window.innerWidth;

            if(this.props.routeObj.match.url === '/about' && window.scrollY > 800 && this.state.mainBoxState === null){
                this.setState({ mainBoxState: true })
            }else if(this.props.routeObj.match.url === '/portofolio' && this.state.mainBoxState === null){
                this.setState({ mainBoxState: true })
            }
           
             if(width < 900 && this.state.mainBoxState === null){
                this.setState({ mainBoxState: true })
             } 
            else if(pixels > 2000 && pixels < 2300 && this.state.mainBoxState === null){
                this.setState({ mainBoxState: true })
            }

        })

        return <Transition in={this.state.mainBoxState} timeout={1000} mountOnEnter unmountOnExit>
               {state => (

                 <div className="MainBox" style={{animation: state === 'entering' ? 
                 'mainBoxAnim 1s ease-in-out' :
                 '',  }}>
                        <TimeHolder state={ state }/>
                        <Info state={ state }/>
                        <FooterNav click={this.props.click} state={ state }/>
                        <a href="https://www.instagram.com/nezir.nesimi/" target="_blank"><h6>designed and developed by <span>Nesimi Nezir</span></h6></a>

                </div>

               )}

        </Transition>

        
    }
}

export default MainBox;



