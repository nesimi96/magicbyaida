import React from 'react';
import './ImageHolder.scss';

const imageHolder = (props) => {

    return <div className="ImageHolder">
                <img src={props.openingImg}/>
           </div>
}

export default imageHolder;

