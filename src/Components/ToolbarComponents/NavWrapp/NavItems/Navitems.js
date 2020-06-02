import React from 'react';
import './NavItemss.scss';

const navItems = (props) => {
    
    const datas = [{title: 'O nama', route: '/about'},
                   {title: 'Portofolio', route: '/portofolio'}, 
                   {title: 'Informacije', route: '/info'}]

    const items = datas.map(cur => {
         return <div onClick={() => props.click(cur.route)} key={cur.title} className="NavItemss">{cur.title}</div>
    })

    return items;
}

export default navItems;