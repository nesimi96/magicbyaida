import React from 'react';
import './ImgStyle.scss';

const imgStyle = (props) => {

    const state = props.state

    const data = [  {animeTime: '.15s'},
                    {animeTime: '.2s'},
                    {animeTime: '.25s'},
                    {animeTime: '.3s'},
                    {animeTime: '.35s'}, 
                    {animeTime: '.4s'},
                    {animeTime: '.45s'},
                    {animeTime: '.5s'},
                    {animeTime: '.55s'},
                    {animeTime: '.6s'},
                    {animeTime: '.65s'},
                    {animeTime: '.7s'},
                ]

        const styles = data.map(cur => {
                return <div className="ImgStyle" style={{
         animation: state === 'entered' && props.imgAnimation ? `imgStyle ${cur.animeTime} ease-in-out` : '',
         height: state === 'entered' && props.imgAnimation ? '0%' : '100%',
                        }}></div>
                    })
                 

    return styles
}

export default imgStyle;