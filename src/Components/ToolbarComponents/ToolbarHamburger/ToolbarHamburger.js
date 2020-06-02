import React from 'react';
import './ToolbarHamburger.scss';

const toolbarHamburger = (props) => {
    return <div onClick={props.click} className="ToolbarHamburger">
               <div className="ToolbarHamburger-line ToolbarHamburger-line-1"></div>
               <div className="ToolbarHamburger-line ToolbarHamburger-line-2"></div>
               <div className="ToolbarHamburger-line ToolbarHamburger-line-3"></div>
              
          </div>
}

export default toolbarHamburger;