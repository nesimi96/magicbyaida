import React, { Component } from 'react';
import './Portofolio.scss';
import FirstHalf from '../../Components/PortofolioComponents/FirstHalf/FirstHalf';
import MainWrapper from '../../Components/PortofolioComponents/MainWrapper/MainWrapper';

class Portofolio extends Component {


    state = {
        firstHalfState: null,
    }


    componentDidMount(){
        window.scrollTo(0, 0);
      }

    portofolioRedirectHandler = () => {
        this.props.routeObj.history.push('/portofolio');
    }

    render(){

        window.addEventListener('scroll', () => {
           const screenWidth = window.innerWidth;
           let startPosition = null;
           let endPosition = null;
           startPosition = screenWidth > 900 ? 1200 : 700;
           endPosition = screenWidth > 900 ? 1600 : 1300;


            const pixels = window.scrollY;
            if (pixels > startPosition && pixels < endPosition && this.state.firstHalfState === null){
                this.setState({ firstHalfState: true })
            }
        })


        return <div className="Portofolio">
                    <FirstHalf firstHalfState={this.state.firstHalfState} />  
                    <MainWrapper click={ this.portofolioRedirectHandler } />
               </div>
    }
}

export default Portofolio;