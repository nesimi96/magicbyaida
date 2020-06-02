import React from 'react';
import './MapHolder.scss';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import { Transition } from 'react-transition-group';


const WrappedMap = withScriptjs(withGoogleMap(props => {
  return <GoogleMap defaultZoom={15}
               defaultCenter={ {lat: 43.852800, lng: 18.371900 } }>
        
        <Marker position={{ lat: 43.852800, lng: 18.371900 }} label={{ color: 'black', fontWeight: 'bold',
         fontSize: '12px', text: 'Magic By Aida', top: '2rem' }}/>
    </GoogleMap>
    
}));

const mapHolder = (props) => {

  
      return <Transition in={props.showContent} timeout={100} mountOnEnter>
              {state => (
                  <div className="MapHolder">
                        <div className="MapHolder-overdiv" style={{width: state === 'entered' ? 
                        '0%' : '100%'}}></div>
                        <WrappedMap 
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-9mWkEw5yI8GIjXel9aQhVIW59EdrWoY&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }}/>} 
                            containerElement={<div style={{ height: `100%` }}/>}
                            mapElement={<div style={{ height: `100%` }}/>}/>
                 </div>
              )}

           </Transition>














}
  
  export default mapHolder;
  
  /*
  
   <div className="MapHolder">
    <div className="MapHolder-overdiv"></div>
  <WrappedMap 
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-9mWkEw5yI8GIjXel9aQhVIW59EdrWoY&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }}/>} 
  containerElement={<div style={{ height: `100%` }}/>}
  mapElement={<div style={{ height: `100%` }}/>}/>
            </div>
  }

*/

