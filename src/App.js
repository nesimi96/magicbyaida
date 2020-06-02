import React, { Component } from 'react';
import './App.scss';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Containers/Header/Header';
import About from './Containers/About/About';
import AboutMain from './Containers/AboutMain/AboutMain';
import Portofolio from './Containers/Portofolio/Portofolio';
import Toolbar from './Containers/Toolbar/Toolbar';
import Footer from './Containers/Footer/Footer';
import PortofolioMain from './Containers/PortofolioMain/PortofolioMain';
import Informations from './Containers/Informations/Informations';
import { GoogleMaps } from 'react-google-maps';
import Loader from './Containers/Loader/Loader';


class App extends Component {

  state = {
    loader: true,
    loaderAnim: false,
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    setTimeout(() => {
        if(this.state.loader){
          this.setState({loader: false})
        }
    }, 4000)

    setTimeout(() => {
      if(this.state.loaderAnim === false){
        this.setState({loaderAnim: true})
      }
  }, 3000)
  }

  

  render(){

     let loader = null;
     loader = this.state.loader ? <Loader loaderAnim={this.state.loaderAnim} isLoaderOpen={this.state.loader}/> : null;
  
      return (
        <Router>
          { loader }
          <Route exact path="/about" render={(props) => {
            return <React.Fragment>
                      <Toolbar routeObj={ props }/>
                      <AboutMain />
                     <Footer routeObj={props}/>
                  </React.Fragment> 
          }}></Route>
    
          <Route exact strict path="/portofolio" render={(props) => {
            
            return <React.Fragment>

                  <Toolbar routeObj={ props }/>
                  <PortofolioMain />
                  <Footer routeObj={ props }/>

            </React.Fragment>
          }}></Route>
    
          <Route exact strict path="/info" render={(props) => {
            return <React.Fragment>
                       <Toolbar routeObj={ props }/>
                       <Informations />
                    </React.Fragment>
                   
          }}></Route>
    
          <Route exact path="/" render={(props) => {
            return <div className="App">
                  <Toolbar routeObj={ props }/>
                  <Header routeObj={ props } isLoaderOpen={this.state.loader}/>
                  <About routeObj={ props }/>
                  <Portofolio routeObj={ props }/>
                  <Footer routeObj={ props }/>
              </div>
          }}></Route>
    
        </Router>
      );
  }

}

export default App;

