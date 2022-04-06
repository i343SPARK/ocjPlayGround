import React from 'react'
import ReactPlayer from 'react-player'

export const VideoTest = () => {
  return (
    <section className='videoSection'>
      <div className='videoSources'>
        <ReactPlayer 
        width="100%"
        height="100%"
        url={require('./sources/te-amo-elizabeth-todo-se-derrumbo.mp4')}
        controls
        />
      </div>
    </section>
  )
}
