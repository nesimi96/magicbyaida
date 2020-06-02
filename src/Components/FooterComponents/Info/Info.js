import React from 'react';
import './Info.scss';
import Location from '../../../assets/SVG/Location/Location';
import Phone from '../../../assets/SVG/Phone/Phone';
import Mail from '../../../assets/SVG/Mail/Mail';
import { Transition } from 'react-transition-group';

const info = (props) => {

     const data = [
      {icon: <a href="tel:033 874-291"><Phone /></a>, text: <a href="tel:033 874-291">033 874-291</a>, animTime: '.4s'}, 
      {icon: <Location />, text: 'Čengić Vila, ul. Nedima Filipovića bb(Kod Mrvice)', animTime: '.6s'},
      {icon: <Mail />, text: 'aidaajdinovic@hotmail.com', animTime: '.8s'}
    ];

     const items = data.map((cur, ind) => {
         return  <Transition in={props.state === 'entered'} timeout={500} mountOnEnter>
                       {state => (

                        <div style={{animation: `infoAnim ${cur.animTime} ease-in-out`, 
                        display: state === 'entered' ? 'flex' : 'none',
                        }} className="Info-box" key={ind}>
                                 {cur.icon}
                                <p>{cur.text}</p> 
                         </div>

                       )}
                </Transition>

     })
     

       return <div className="Info">
                  { items }
             </div>
                
            
}

export default info;
