import React, { Component } from 'react';
import './About.scss';
import ImageBox from '../../Components/AboutComponents/ImageBox/ImageBox';
import TextBox from '../../Components/AboutComponents/TextBox/TextBox';

class About extends Component {

    componentDidMount(){
        window.scrollTo(0, 0);
      }

    aboutRedirectHandler = () => {
       this.props.routeObj.history.push('/about');
    }

    render(){

        return <about className="About">
                   <ImageBox />
                   <TextBox click={ this.aboutRedirectHandler}/>
              </about>
    }
}

export default About