import React from 'react';
import styled from 'styled-components'; 

const facebook = (props) => {
    return (
        <Facebook theme={props.iconStyle} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <title>facebook</title>
        <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
        </Facebook>
    )
}

export default facebook;


const Facebook = styled.svg`
    margin-right: 1rem;
    @media only screen and (max-width: 600px) {
        margin-right: 0rem;
        width: 1.3rem;
        height: 1.3rem;
    };
    ${props => props.theme};
`;