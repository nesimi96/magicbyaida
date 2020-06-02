import React, { Component } from 'react';
import './Informations.scss';
import MapHolder from '../../Components/InformationsComponents/MapHolder/MapHolder';
import ContactInfo from '../../Components/InformationsComponents/ContactInfo/ContactInfo';


class Informations extends Component{

    state = {
      showContent: false,
    }

    componentDidMount(){
      this.setState({ showContent: true })
    }

    render(){

      const showContent = this.state.showContent;

      return <div className="Informations">
                  <MapHolder showContent={showContent}/>
                  <ContactInfo showContent={showContent}/>
            </div>
    }
}

export default Informations