import React, { useState } from 'react'
import ReactPlayer from 'react-player'
// import {ButtonHook} from '../../hooks/ButtonHook'

export const VideoTest = () => {

  const [condition, setCondition] = useState(false);
  const [condition2, setCondition2] = useState(false);
  
  return (
    <section className='videoSection'>
      <div className='videoSources'>
        <ReactPlayer 
        id = 'VideoSC'
        width="100%"
        height="100%"
        url="https://www.dropbox.com/s/1xcg0a9wxorpi2x/ego-prueba-el-platillo-que-remy-le-prepara-ratatouille.mp4?dl=0"
        playing={condition}
        pip={condition2}
        
        />
      </div>
      <div>
        <button style={{width: "300px", height: "300pxs"}} onClick={() => setCondition(!condition)}>Play</button>
        <button style={{width: "300px", height: "300pxs"}} onClick={() => setCondition2(!condition2)}>PiP</button>
      </div>
    </section>
  )
}
  // const [isPush, pushOn, pushOff] = ButtonHook(false)


  