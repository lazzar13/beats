import logo from './logo.svg';
import './App.css';
import {useState,useEffect, Component, React} from 'react'
import RingLoader from 'react-spinners/RingLoader';
import {songs} from './songs';
import Wrapper from './wrapper';
import Bio from './bio';
function App() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    },1000)

  },[])
  document.title='Am'
  return (
    <div className="App">
    {
      loading?
      <RingLoader color="#a09edd" loading={loading} size={180} className='lod'/>
      :<div><Bio></Bio><Wrapper x={songs}></Wrapper>
      </div>
    }
      
    </div>
  );
}

export default App;
