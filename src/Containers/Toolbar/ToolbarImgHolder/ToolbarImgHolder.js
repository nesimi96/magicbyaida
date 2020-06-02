import React from 'react';
import './ToolbarImgHolder.scss';
import ToolbarImg from '../../../assets/img/toolbarLogo.png';

const toolbarImgHolder = (props) => {
     return <div onClick={() => props.click('/')} className="ToolbarImgHolder">
                  <img src={ToolbarImg} alt="Magic by Aida picture" />
            </div>
}

export default toolbarImgHolder;
