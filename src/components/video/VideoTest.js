import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import {QuestionOne} from "./questionsVideo/QuestionOne";
import {QuestionTwo} from "./questionsVideo/QuestionTwo";
import {QuestionThee} from "./questionsVideo/QuestionThree";
// import {ButtonHook} from '../../hooks/ButtonHook'

export const VideoTest = () => {
  let [speed, setSpeed] = useState(1)
  let [names, setNames] = useState("play")
  const [condition, setCondition] = useState(false);
  const [condition2, setCondition2] = useState(false);
  const [condition3, setCondition3] = useState(false);
  const [watchFirst, setWatchFirst] = useState(false)
  const [watchSecond, setWatchSecond] = useState(false);
  const [watchThird, setWatchThird] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleWatchComplete = ( {playedSeconds} ) =>{
    // console.log(playedSeconds)
    setProgress(playedSeconds)
    console.log(progress)

    if (progress > 11 && progress < 11.02 && condition){
      onPlayName()
      setWatchFirst(true)
    }else if (progress > 11.2 && progress < 11.5){
      setWatchFirst(false)
    }

    if (progress > 27 && progress < 27.03 && condition){
      onPlayName()
      setWatchSecond(true)
    }else if (progress > 27.2 && progress < 27.5){
      setWatchSecond(false)
    }

    if (progress > 87 && progress < 87.06 && condition){
      onPlayName()
      setWatchThird(true)
    }else if (progress > 87.2 && progress < 87.5){
      setWatchThird(false)
    }
  }

  const setFirst = () =>{
      setProgress(0)
  }

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
            progressInterval={progress}
            onProgress={handleWatchComplete}

        />
      <input className="video-loaded" min={0} max={100} step='any'
             id={"video-interval"}
             type="range"
             value={progress}
             onChange={handleWatchComplete}
      />
      <div className='videoBar'>
        <button className='videoButton' onClick={onPlayName}>{names}</button>
        <button className='videoButton' onClick={() => setCondition2(!condition2)}>PiP</button>
        <button className='videoButton' onClick={() => setCondition3(!condition3)}>Muted</button>
        <button className='videoButton' onClick={speedOne}>x1</button>
        <button className='videoButton' onClick={speedOneFive}>x1.5</button>
        <button className='videoButton' onClick={speedTwo}>x2</button>
      </div>
        <p>{parseInt(progress)}</p>
        <article className={watchFirst ? "on-first-box" : "first-box"}>
          <QuestionOne/>
          <div>
            <button className='videoButton' onClick={onPlayName}>Next</button>
          </div>
        </article>
        <article className={watchSecond ? "on-second-box" : "second-box"}>
          <QuestionTwo/>
          <div>
            <button className='videoButton' onClick={onPlayName}>Next</button>
          </div>
        </article>
        <article className={watchThird ? "on-third-box" : "third-box"}>
          <QuestionThee/>
          <div>
            <button className='videoButton' onClick={onPlayName}>Next</button>
          </div>
        </article>
      </div>
    </section>
  )
}


  