import React from 'react';
import '../LeftChanger/LeftChanger.scss';
import ArrowRight  from '../../../../assets/SVG/ArrowRight/ArrowRight';
import styled from 'styled-components'

const rightChanger = (props) => {
 
    const rightChanger = {
        fill: 'white',
        transform: 'rotate(-45deg)'
    }

    return <RightChanger onClick={props.rightHandler} className="LeftChanger">
               <ArrowRight style={rightChanger}/>
    </RightChanger>
}

export default rightChanger;

const RightChanger = styled.div`
     left: 75%;

     @media only screen and (max-width: 900px) {
        left: 85%;
    }

    @media only screen and (max-width: 600px) {
        left: 90%;
    }

    @media only screen and (max-width: 500px) {
        left: 70%;
    }
`;