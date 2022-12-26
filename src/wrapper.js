import React from 'react';
import Player from './player';
import Playernew from './playerNew.js'
const Wrapper =({x})=>{
var i=0
    return(
        <div className='wrapper'>{x.map(()=>{
            return(<div className='container'
            key={i}
            >
            <Playernew 
            mptri={x[i].mptri}
            name={x[i].name}
            bpm={x[i].bpm}
            link={x[i].link}
            links={x[i].links}
            
            >{i++}</Playernew>
            
            </div>
            

            )
            
        })}
            
           
        </div>
    );
}

export default Wrapper;