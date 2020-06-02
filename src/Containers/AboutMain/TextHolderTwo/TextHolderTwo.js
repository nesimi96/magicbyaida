import React from 'react';
import './TextHolderTwo.scss';
import { Transition } from 'react-transition-group';

const textHolderOne = (props) => {
    return <Transition in={props.animation} timeout={1100} >
            {state => (

            <div className="TextHolderTwo" 
            style={{display: state === 'entered' ? 'block' : 'none',
                   animation: state === 'entered' && props.screenWidth > 600 ? 'textOne 1s ease-in-out' : ''}}>
            <p>Stoga ne čudi da svatko tko je jednom navratio u Frizerski salon "Magic by Aida" postaje naš redoviti i odani klijent.
            Frizerski salon "Magic by Aida" nudi baš sve što svijet frizerstva pruža:  Izradu svečanih frizura, šišanje, bojanje kose, preljeva za kosu, tretmane protiv ispadanja kose i  Olaplex, Balayage, Ombre, Sombre i mnoge druge usluge 
            za pripadnice ljepšeg spola koje žele izgledati kao da su sišle s modnih pista.</p>
            <p>Želite li se sami uvjeriti u čemu je tajna dugotrajnosti i popularnosti, posjetite frizerski salon "Magic by Aida" i uvjerite se u našu kvalitetu!</p>          
                 
            </div>
            )}
           </Transition>
}

export default textHolderOne;

