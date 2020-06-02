import React from 'react';
import './FooterNav.scss';
import { Transition } from 'react-transition-group';


const footerNav = (props) => {

    const datas = [{title: 'o nama', route: '/about'},
    {title: 'portofolio', route: '/portofolio'}, 
    {title: 'informacije', route: '/info'}]

        const items = datas.map((cur, ind) => {
        return <Transition in={props.state === 'entered'} timeout={800} mountOnEnter>
               {state => (
                   <div 
                   onClick={() => props.click(cur.route)} 
                   key={cur.title + cur.ind} 
                   style={{animation: 'footerNavAnim .5s ease-in-out',
                  display: state === 'entered' ? 'flex' : 'none'}} className="FooterNav-items">{cur.title} 
                </div>
               )}

              </Transition>
        })


    return <div className="FooterNav">
                { items }
           </div>
}

export default footerNav

