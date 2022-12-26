import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ba from './src/4 140bpm Ym2.mp3'
import fas from './src/goy.mp3'


const Player =({mptri,name,link,bpm})=>{

    return(
        <div>
            <ReactAudioPlayer
            src={mptri}
            controls
            />

        
        </div>
    );
}

export default Player;