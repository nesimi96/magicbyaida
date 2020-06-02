import React from 'react';
import './NavItem.scss';
import { Link, Route } from 'react-router-dom';

const navItem = (props) => {

    const datas = [{title: 'O nama', route: '/about', animeTime: '1.1' },
                   {title: 'Portofolio', route: '/portofolio', animeTime: '1.4' }, 
                   {title: 'Sve informacije', route: '/info', animeTime: '1.8' }]
    
     let items = null;
    if (props.state === 'entered') {

        items = datas.map(cur => {
            return (
                    <div onClick={() => props.redirectClick(cur.route)} style={{ animation: props.navState ? `itemAnime ${cur.animeTime}s ease-in-out` : ``,
                 display: props.navState ? 'block' : 'none'}}
                     className="NavItem" key={cur.title}>{cur.title} </div >
            )
        })
    }

    return (
        <React.Fragment>
            {items}
        </React.Fragment>
        
    );
}


export default navItem;