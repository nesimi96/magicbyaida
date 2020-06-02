import React from 'react';
import './ToolbarNavigation.scss';
import NavStyles from  '../../HeaderComponents/Navigation/NavigationWrapper/NavStyles/NavStyles';
import CloseNav from '../../HeaderComponents/Navigation/NavigationWrapper/CloseNav/CloseNav';
import NavItems from '../../HeaderComponents/Navigation/NavItems/NavItems';

const toolbarNavigation = (props) => {
    return <div className='ToolbarNavigation'>
                 <NavStyles toolNavState={props.toolNavState} />
                 <CloseNav toolbarClose={props.toolbarNavigationCloseHandler} 
                 toolNavState={props.toolNavState}/>
                 <NavItems toolNavState={props.toolNavState}
                 toolbarRedirectHandler={props.toolbarRedirectHandler} />
                
           </div>
}

export default toolbarNavigation;

