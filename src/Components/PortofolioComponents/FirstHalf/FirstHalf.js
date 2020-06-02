import React from 'react';
import './FirstHalf.scss';


const firstHalf = (props) => {

    return <div style={{ width: props.firstHalfState ? '100%' : '0'}} className="FirstHalf">
                <h4>PORTOFO <span className="span">LIO</span></h4>
            </div>
}

export default firstHalf;