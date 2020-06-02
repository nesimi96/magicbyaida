import React from 'react';
import './TextHolderOne.scss';
import '../TextHolderTwo/TextHolderTwo.scss';
import { Transition } from 'react-transition-group';

const textHolderOne = (props) => {

    const timeout = props.screenWidth > 600 ? 1100 : 0;

    return <Transition in={props.animation} timeout={0} >
            {state => (

            <div className="TextHolderOne" 
            style={{display: state === 'entered' ? 'block' : 'none',
                   animation: state === 'entered'  ? 'textOne 1s ease-in-out' : ''}}>
                <p>Uspjeti u frizerskom svijetu, u kojem se trendovi i stilovi svakodnevno mijenjaju, mogu samo najbolji. No trajati uspješno u tom svijetu više od 10 godina mogu samo vrhunski frizeri a ta čast, među rijetkima u Bosni i Hercegovini pripada Frizerskom salonu "Magic by Aida".
            Frizerski salon "Magic by Aida" posluje od 2009. upravo zahvaljujući spoju dugogodišnje frizerske tradicije  i modernog načina kreiranja frizure.</p>
                <p>Naš uspjeh pripisujemo redovitim frizerskim usavršavanjima, praćenjem najnovijih svjetskih trendova i profesionalnošću naših djelatnika. Naime, svi djelatnici Frizerskog salona "Magic by Aida" stalno se educiraju i usavršavaju na posebnim seminarima u Bosni i Hercegovini i u inozemstvu te se trude pratiti najnovije korake u frizerstvu. 
            Svojim iskustvom i kreativnošću svakom posjetitelju pružaju maksimalnu uslugu – od odabira frizure koja im najbolje pristaje uz oblik lica, kvalitete kose i stila života do savjeta kako sami kod kuće mogu nastaviti njegu kose na najbolji način.</p>
            </div>
            )}
           </Transition>

}

export default textHolderOne;
