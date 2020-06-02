import React from 'react';
import ArrowDown from '../../../../assets/SVG/ArrowRight/ArrowRight';
import styled from 'styled-components'

const redirectWrapper = (props) => {

    return <RedirectWrapper theme={props} onClick={props.click}>
               <p className="p p-1">galerija</p>
               <div>
                    <ArrowDown />
               </div>
          </RedirectWrapper>
}

export default redirectWrapper;

const RedirectWrapper = styled.div`

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: ${props => props = props.theme.style ? '100%' : '25%'};
height: ${props => props = props.theme.style ? '100%' : '15%'};
background-color: transparent;
z-index: 400;
transition: all .3s ease-in-out;

display: flex;
justify-content: center;
align-items: center;

&:hover {
     background-color: ${props => props = props.theme.style ? 'rgba(0, 0, 0, .85)' : 'transparent'} ;
     cursor: pointer;
}


@media only screen and (max-width: 900px) {
    width: max-content;
   }
   
& div {
       border: .5px solid rgb(231, 121, 121);
       border-radius: 100rem;
       width: 2.5rem;
       height: 2.5rem;
       transform: rotate(-45deg);
       display: ${props => props = props.theme.style ? 'none' : 'flex'};
       justify-content: center;
       align-items: center;
       fill: #fff;
       transition: all .3s ease-in-out; 
 }

&:hover div {
    border: 1px solid  ${props => props = props.theme.style ? 'salmon' : 'rgb(230, 192, 192)'};
    margin-left: .5rem;
    display: flex;
    transition: all .3s ease-in-out;

}

&:hover p {
     display: block;
     transition: all .3s ease-in-out;
}


& p {
    color: #fff;
    margin-right: 1rem;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    transition: all .3s linear;
    backface-visibility: hidden;
    display: ${props => props = props.theme.style ? 'none' : 'block'};
    transition: all .3s ease-in-out;
}



`;
