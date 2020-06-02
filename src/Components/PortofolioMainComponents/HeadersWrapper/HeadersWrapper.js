import React from 'react';
import './HeadersWrapper.scss';

const HeadersWrapper = (props) => {

    const data = [
        {text: 'Mjesto gdje magija počinje', class: 'HeadersWrapper HeadersWrapper-1'},
        {text: 'Portofolio', class: 'HeadersWrapper HeadersWrapper-2'},
        {text: 'Magic By Aida', class: 'HeadersWrapper HeadersWrapper-3'},
        {text: 'Mi kreiramo magiju', class: 'HeadersWrapper HeadersWrapper-4'},
    ]

    const headers = data.map(cur => {
        return <div className={cur.class}>
                    <h2>{cur.text}</h2>
                </div>
    })

   return headers

}

export default HeadersWrapper;