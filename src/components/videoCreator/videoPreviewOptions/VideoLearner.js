import {Component} from "react";
import ReactPlayer from 'react-player'
import Duration from "../testFor/Duration";
import { hot } from 'react-hot-loader'
import React from "react";


class VideoLearner extends Component{

    constructor(props) {
        super(props);

        this.state = {
            url: "https://www.dropbox.com/s/jfqearkekp53ygk/lo-que-hay-detras-de-una-pagina-web-explicado-con-minecraft.mp4?dl=0",
            pip: false,
            playing: false,
            controls: false,
            light: false,
            volume: 0.5,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            loop: false,
            velocity_1: true,
            velocity_2: false,
            velocity_3: false,
            markSet: true,
        }
    }

    load = url => {
        this.setState({
            url,
            played: 0,
            loaded: 0,
            pip: false
        })
    }

    handlePlayPause = () => {
        this.setState({ playing: !this.state.playing })
    }

    handleVolumeChange = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }

    handleOnPlaybackRateChange = (speed) => {
        this.setState({ playbackRate: parseFloat(speed) })
    }

    handlePlay = () => {
        console.log('onPlay')
        this.setState({ playing: true })
    }

    handleEnablePIP = () => {
        console.log('onEnablePIP')
        this.setState({ pip: true })
    }

    handleDisablePIP = () => {
        console.log('onDisablePIP')
        this.setState({ pip: false })
    }

    handlePause = () => {
        console.log('onPause')
        this.setState({ playing: false })
    }

    handleSeekMouseDown = e => {
        this.setState({ seeking: true })
    }

    handleSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }

    handleSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }

    handleProgress = state => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
            this.setState(state)
        }

        console.log("Tomando tiempo")
    }

    handleEnded = () => {
        console.log('onEnded')
        this.setState({ playing: this.state.loop })
    }

    handleDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })

        if(duration === 18){
            this.handlePlayPause()
        }
    }

    handleVelocity_1 = () =>{
        this.setState({velocity_1: !this.state.velocity_1})
        this.setState({velocity_2: !this.state.velocity_2})
        this.handleOnPlaybackRateChange(1.5)
    }

    handleVelocity_2 = () =>{
        this.setState({velocity_2: !this.state.velocity_2})
        this.setState({velocity_3: !this.state.velocity_3})
        this.handleOnPlaybackRateChange(2.0)
    }

    handleVelocity_3 = () =>{
        this.setState({velocity_3: !this.state.velocity_3})
        this.setState({velocity_1: !this.state.velocity_1})
        this.handleOnPlaybackRateChange(1.0)
    }

    ref = player => {
        this.player = player
    }

    render() {
        const {url, playing, controls, light, volume, muted, loop,
            played, loaded ,duration, playbackRate, pip, velocity_1,
            velocity_2, velocity_3,
            markSet} = this.state
        return(
            <section className={"preview--section"}>
                <div className={"preview-container"}>
                    <article className={"preview-container--video"}>
                        <ReactPlayer
                            ref={this.ref}
                            className='react-player'
                            width='100%'
                            height='100%'
                            url={url}
                            pip={pip}
                            playing={playing}
                            controls={controls}
                            light={light}
                            loop={loop}
                            playbackRate={playbackRate}
                            volume={volume}
                            muted={muted}
                            onReady={() => console.log('onReady')}
                            onStart={() => console.log('onStart')}
                            onPlay={this.handlePlay}
                            onEnablePIP={this.handleEnablePIP}
                            onDisablePIP={this.handleDisablePIP}
                            onPause={this.handlePause}
                            onBuffer={() => console.log('onBuffer')}
                            onPlaybackRateChange={this.handleOnPlaybackRateChange}
                            onSeek={e => console.log('onSeek', e)}
                            onEnded={this.handleEnded}
                            onError={e => console.log('onError', e)}
                            onProgress={this.handleProgress}
                            onDuration={this.handleDuration}
                        />
                    </article>
                </div>
                <div className={"video-bar--controls"}>
                    <button onClick={this.handlePlayPause} className={playing ? "video-playing" : "video-paused"}></button>
                    <span className={"velocity-container"}>
                        <button className={velocity_1 ? "velocity-button--true" : "velocity-button--false"}
                                onClick={this.handleVelocity_1}
                        >
                            x1
                        </button>
                        <button className={velocity_2 ? "velocity-button--true" : "velocity-button--false"}
                                onClick={this.handleVelocity_2}
                        >
                            x2
                        </button>
                        <button className={velocity_3 ? "velocity-button--true" : "velocity-button--false"}
                                onClick={this.handleVelocity_3}
                        >
                            x3
                        </button>
                    </span>
                    <button className={"previous-button--video"}>Previous</button>
                    <button className={"next-button--video"}>Next</button>
                    <span className={"volume-container"}>
                        <input className={"volume"} type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                    </span>
                    <span className={"time-container"}>
                        <Duration className={"duration"} seconds={duration * played} />
                    </span>
                </div>
                <div className={"seek-container"}>
                    <input
                        className={"seek-bar"}
                        type='range' min={0} max={0.999999} step='any'
                        value={played}
                        onMouseDown={this.handleSeekMouseDown}
                        onChange={this.handleSeekChange}
                        onMouseUp={this.handleSeekMouseUp}
                    />
                    <span className={markSet ? "gray-set" : "white-set"}></span>
                </div>
            </section>
        )
    }
}

export default hot(module)(VideoLearner)