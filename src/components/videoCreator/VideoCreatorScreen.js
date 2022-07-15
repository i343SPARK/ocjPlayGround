
import {Bar} from "../../Bar";
import {Link} from "react-router-dom"
import {CreatorSectionVisual} from "./CreatorSectionVisual";
// import VideoLearner from "./videoPreviewOptions/VideoLearner";
import {useEffect, useState} from "react";
import axios from "axios";
import {MultipleAnsware} from "./videoPreviewOptions/TypeQuestions/MultipleAnsware";
import TestFor from "./testFor/TestFor";
import {useUpdate} from "./VideoHooks/useUpdate";



export const VideoCreatorScreen = () =>{
    const [ displayStep, setDisplayStep] = useState(true)
    const questionHooks = useUpdate()
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
        questionHooks.handleState()
    }

    return(
        <>
            <Bar/>
            <span style={displayStep? {display: "block", marginBottom: 50} : {display: "none"}}>
                <CreatorSectionVisual/>
            </span>
            <span style={displayStep? {display: "none"} : {display: "block"}}>
                <TestFor/>
                <MultipleAnsware/>
            </span>
            <div className={"div-button-screen"}>
                {/*<button onClick={handleScreen} className={"button-screen"}>{displayStep ? 'next' : 'back'}</button>*/}
                <Link to={"/previewVideo"} onClick={() => {console.log("pedro")}} className={"button-screen"}>Next</Link>
            </div>
            <div className={"input-divider"}>
                <input type={"file"} placeholder={"write url video needed"} className={"input-video-json"} onChange={updateUrlInput}/>
                <button onClick={setterUrlVideo}>submit</button>
            </div>
        </>
    )
}