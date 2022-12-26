import React from 'react';
import bt from './src/bt.png'
import { FaInstagram, FaSoundcloud, FaYoutube } from 'react-icons/fa';


function Bio() {
  return (
    <div className='bioDiv'>
      <img  className='slk' src={bt} alt={` image 1`} />
      <h1 style={{color:'#a09edd'}} >Filip Am Avramovic</h1>
      <div>
      {/* Create a link to the Instagram page using the a element and the href attribute */}
      <a href="https://www.instagram.com/f__avramovic/">
        {/* Display the Instagram icon using the FaInstagram component */}
        <FaInstagram size={34} color={'#5361ab'}/>
      </a>
      {/* Create a link to the SoundCloud page using the a element and the href attribute */}
      <a href="https://soundcloud.com/user-137032472">
        {/* Display the SoundCloud icon using the FaSoundcloud component */}
        <FaSoundcloud size={34} color={'#5361ab'}/>
      </a>
      {/* Create a link to the YouTube page using the a element and the href attribute */}
      <a href="https://www.youtube.com/">
        <FaYoutube size={34} color={'#5361ab'}/>
      </a>
      </div>
      
      <p style={{maxWidth:'500px', justifyContent:'centernpm' , color:'#a09edd'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      
      

    </div>
  );
}

export default Bio;