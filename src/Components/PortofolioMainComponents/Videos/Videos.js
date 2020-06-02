import React from 'react';
import './Videos.scss';
import InstagramEmbed from 'react-instagram-embed';

const videos = () => {
    return <div className="Videos">
                 <iframe className="Videos-2" src="https://www.youtube.com/embed/Bg2VOAWqv-g?start=300" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 <iframe className="Videos-1" src="https://www.youtube.com/embed/pNY5EZCmuLM?start=326" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 <InstagramEmbed 
                     url='https://www.instagram.com/p/B6D4GcyBaZ8/'
                     maxWidth={320}
                     hideCaption={false}
                     containerTagName='div'
                 />
    
           </div>
           
}

export default videos;