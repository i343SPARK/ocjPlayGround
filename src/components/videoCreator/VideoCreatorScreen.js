
import {Bar} from "../../Bar";
import {CreatorSectionVisual} from "./CreatorSectionVisual";
import VideoLearner from "./videoPreviewOptions/VideoLearner";
import {useEffect, useState} from "react";
import axios from "axios";

export const VideoCreatorScreen = () =>{
    const [ displayStep, setDisplayStep] = useState(true)
    // const [ updateUrlVideo, setUpdateUrlVideo ] = useState(false)
    const [ urlVideoInput, setUrlVideoInput] = useState("")

    const apiVideoJSON = "http://localhost:8000/video-data"

    useEffect(() => {
        console.log("hals")
        axios.get(apiVideoJSON).then(res => console.log(res.data)).catch(err => console.log(err))
    }, [])


    const setterUrlVideo = () => {
        axios.post(apiVideoJSON, {
            url: urlVideoInput
        }).then(res => console.log(res.data)).catch(err => console.log(err))
    }

    const updateUrlInput = (event) => {
        event.preventDefault()
        setUrlVideoInput(event.target.value)
        console.log(urlVideoInput)

    }

    const handleScreen = () =>{
        setDisplayStep( !displayStep )
    }

    return(
        <>
            <Bar/>
            <span style={displayStep? {display: "block", marginBottom: 50} : {display: "none"}}>
                <CreatorSectionVisual/>
            </span>
            <span style={displayStep? {display: "none"} : {display: "block"}}>
                <VideoLearner/>
            </span>
            <div className={"div-button-screen"}>
                <button onClick={handleScreen} className={"button-screen"}>{displayStep ? 'next' : 'back'}</button>
            </div>
            <div className={"input-divider"}>
                <input type={"url"} placeholder={"write url video needed"} className={"input-video-json"} onChange={updateUrlInput}/>
                <button onClick={setterUrlVideo}>submit</button>
            </div>
        </>
    )
}