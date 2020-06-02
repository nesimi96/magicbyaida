import React, { Component } from 'react';
import './TextWrapper.scss';
import Button from '../../../../assets/Button/Button';
import button from '../../../../assets/Button/Button';
import { Transition } from 'react-transition-group';

class textWrapper extends Component {

    state = {
       animeState: null,
    }

    render(){
       
        window.addEventListener('scroll', () => {
            const pixels = window.scrollY;

            if(pixels > 300 & pixels < 1200 & this.state.animeState === null){
                this.setState({ animeState: true })
            }
        })


        const buttonStyle = {
             position: 'relative', 
             bottom: '-6rem',
             padding: window.innerWidth > 450 ? '1rem 2rem' : '.7rem 1.25rem',
             animation: 'goingUp 1.4s ease-in-out',
         }

         const spanData = [{name: 'Magic', animeTime: '.6s'}, {name: 'By', animeTime: '.8s'}, {name: 'Aida', animeTime: '1s'}]
         const headers = spanData.map(cur => {
          return <h3 key={cur.name} style={{marginRight: '0.8rem', animation: `goingUp ${cur.animeTime} ease-in-out`}} >{cur.name}</h3>
         })

    return <Transition in={this.state.animeState} timeout={750} mountOnEnter>{state => (
            <div className="TextWrapper">
                <div className="TextWrapper-line" style={{width: state === 'entered' ? '5rem' : '0'}}></div>
                <div className="headerHolder"> {headers} </div>
                <p style={{animation: 'goingUp 1.2s ease-in-out'}}>Frizerski salon "Magic by Aida" posluje od 2009. upravo zahvaljujući spoju dugogodišnje frizerske tradicije (druga generacija) i modernog načina kreiranja frizure. 
                </p>
                <Button click={this.props.click} style={buttonStyle} content='POGLEDAJ'/>
            </div>
    )}

          </Transition>
    }



}

export default textWrapper;