import React, { useState } from 'react'
import ReactPlayer from 'react-player'
// import {ButtonHook} from '../../hooks/ButtonHook'

export const VideoTest = () => {

  let testDuration = 0;
  let [speed, setSpeed] = useState(1)
  let [duration, setDuration] = useState(0)
  let [names, setNames] = useState("play")
  const [condition, setCondition] = useState(false);
  const [condition2, setCondition2] = useState(false);
  const [condition3, setCondition3] = useState(false);

  const handleWatchComplete = ( {playedSeconds} ) =>{
    console.log(playedSeconds)
    setDuration(playedSeconds)
  }

  // const viewTimeLine = () =>{
  //   setDuration(duration = 2)
  // }

  const speedOne = () => {
    setSpeed(speed = 1)
  }
  const speedOneFive = () => {
    setSpeed(speed = 1.5)
  }
  const speedTwo = () => {
    setSpeed(speed = 2)
  }

  const onPlayName = () => {
    if(condition){
      setNames("Play")
    }

    if(!condition){
     setNames("Pause")
    }

    setCondition(!condition)
  }

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
        muted ={condition3}
        playbackRate={speed}
        onProgress={handleWatchComplete}
        />
      <div className='videoBar'>
        <button className='videoButton' onClick={onPlayName}>{names}</button>
        <button className='videoButton' onClick={() => setCondition2(!condition2)}>PiP</button>
        <button className='videoButton' onClick={() => setCondition3(!condition3)}>Muted</button>
        <button className='videoButton' onClick={speedOne}>x1</button>
        <button className='videoButton' onClick={speedOneFive}>x1.5</button>
        <button className='videoButton' onClick={speedTwo}>x2</button>
      </div>
        <p>{parseInt(duration)}</p>
        <input id={"video-interval"} type="range" value={duration}></input>
      </div>
    </section>
  )
}


  