import React,{ useState } from 'react';
import { FaPlay, FaPause, FaRedo ,FaVolumeMute, FaVolumeUp, FaYoutube, FaSoundcloud, } from 'react-icons/fa';

function Playernew({mptri,name,link,bpm,links}){
    const [playing, setPlaying] = useState(false);
    const [showVolume, setShowVolume] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = React.useRef(null);
    function togglePlay() {
        if (playing) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setPlaying(!playing);
      }
      function handleReplay() {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setPlaying(true);
      }
      function toggleVolume() {
        setShowVolume(!showVolume);
      }
      function handleTimeUpdate() {
        setCurrentTime(audioRef.current.currentTime);
      }
      function handleVolumeChange(event) {
        setVolume(event.target.value);
        audioRef.current.volume = event.target.value;
    }
    const duration = formatDuration(audioRef.current && audioRef.current.duration);
    function formatDuration(duration) {
   
    const date = new Date(duration * 1000);
  
    return date.toTimeString().slice(3, 8);
  }
  function handleSeek(event) {
    audioRef.current.currentTime = event.target.value;
  } 
    return(
        <div className="card">
            <audio
            ref={audioRef}
            src={mptri}
            onTimeUpdate={handleTimeUpdate} 
            hidden={true}
            controls
            />
      <span>
      {volume > 0 ? (
        <FaVolumeUp className="elem" size={24} color={'#a09edd'} onClick={toggleVolume} />
      ) : (
        <FaVolumeMute className="elem" size={24}  color={'#a09edd'} onClick={toggleVolume} />
      )}
      {playing ? (
            <FaPause size={24} className="elem" onClick={togglePlay}  color={'#a09edd'} />
            ) : (
            <FaPlay size={24}  className="elem" color={'#a09edd'}  onClick={togglePlay} />)}
            <FaRedo size={24}  className="elem" color={'#a09edd'} onClick={handleReplay} />
            </span>
            <span>{showVolume && (
        /* Apply the volume-slider class to the volume slider element */
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          className="volume-slider"
          onChange={handleVolumeChange}
        />
      )}</span>

      <input
            type="range"
            min="0"
            max={audioRef.current && audioRef.current.duration}
            value={currentTime}
            onChange={handleSeek}/>
    
      <span>{name} type beat  {duration}  {bpm}bpm</span>
      <span>{link?(<a href="https://www.instagram.com/f__avramovic/">
        {/* Display the Instagram icon using the FaInstagram component */}
        <FaYoutube size={15} color={'#5361ab'}/>
      </a>):("")} 
      {links?(<a href="https://www.instagram.com/f__avramovic/">
        {/* Display the Instagram icon using the FaInstagram component */}
        <FaSoundcloud size={15} color={'#5361ab'}/>
      </a>):("")} 
      </span>
        </div>
    );
}

export default Playernew;