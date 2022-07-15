import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ReactPlayer from 'react-player'
import Duration from './Duration'

class TestFor extends Component {

    state = {
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
        markSet: true,
        datasave: [],
        logicalname: "push me"
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

    setVideo = () =>{
        fetch("http://localhost:8000/video-data").then((res) => res.json()).then((data) => {

            this.setState({datasave: data})

            this.setState({url: this.state.datasave[0].url})
            this.setState({logicalname: this.state.datasave[0].url})

            console.log(this.state.datasave)
            console.log(this.state.logicalname)
        })
    }

    handleStop = () => {
        this.setState({ url: null, playing: false })
    }

    handleToggleControls = () => {
        const url = this.state.url
        this.setState({
            controls: !this.state.controls,
            url: null
        }, () => this.load(url))
    }

    handleToggleLight = () => {
        this.setState({ light: !this.state.light })
    }

    handleToggleLoop = () => {
        this.setState({ loop: !this.state.loop })
    }

    handleVolumeChange = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }

    handleToggleMuted = () => {
        this.setState({ muted: !this.state.muted })
    }

    handleSetPlaybackRate = e => {
        this.setState({ playbackRate: parseFloat(e.target.value) })
    }

    handleOnPlaybackRateChange = (speed) => {
        this.setState({ playbackRate: parseFloat(speed) })
    }

    handleTogglePIP = () => {
        this.setState({ pip: !this.state.pip })
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
    }

    handleEnded = () => {
        console.log('onEnded')
        this.setState({ playing: this.state.loop })
    }

    handleDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })
    }

    renderLoadButton = (url, label) => {
        return (
            <button onClick={() => this.load(url)}>
                {label}
            </button>
        )
    }

    ref = player => {
        this.player = player
    }

    render () {
        const { url, playing, controls, light, volume, muted, loop, played, loaded ,duration, playbackRate, pip, markSet, logicalname } = this.state

        return (
            <section className='videoSectionCreator'>
                <h1>ReactPlayer Demo</h1>
                <div className='player-wrapper'>
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
                </div>
                <div className={"video-bar--controls"}>
                    <button onClick={this.handlePlayPause} className={playing ? "video-playing" : "video-paused"}></button>
                    <button className={"previous-button--video"}>Previous</button>
                    <button className={"next-button--video"}>Next</button>
                    <span className={"volume-container"}>
                        <input className={"volume"} type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                    </span>
                    <span className={"time-container"}>
                        <Duration className={"duration"} seconds={duration * played}/>
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
                    <span className={markSet ? "blue-set" : "white-set"}></span>
                </div>
                <button style={{marginTop: 100}} onClick={this.setVideo}>{logicalname}</button>
            </section>
        )
    }
}

export default hot(module)(TestFor)