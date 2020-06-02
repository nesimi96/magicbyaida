import React from 'react';
import './ContactInfo.scss';
import Info from '../../FooterComponents/Info/Info';

const contactInfo = () => {
    return <div className="ContactInfo">
              <h1>Kontaktirajte nas</h1>
             <Info state={'entered'}/>
            </div>
}

export default contactInfo