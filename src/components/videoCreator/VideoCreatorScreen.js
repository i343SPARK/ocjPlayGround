
import {Bar} from "../../Bar";
import {CreatorSectionVisual} from "./CreatorSectionVisual";
import VideoLearner from "./videoPreviewOptions/VideoLearner";
import {useState} from "react";

export const VideoCreatorScreen = () =>{
    const [ displayStep, setDisplayStep] = useState(true)

    const handleScreen = () =>{
        setDisplayStep( !displayStep )
    }

    return(
        <>
            <Bar/>
            <span style={displayStep? {display: "block", marginBottom: 200} : {display: "none"}}>
                <CreatorSectionVisual/>
            </span>
            <span style={displayStep? {display: "none"} : {display: "block"}}>
                <VideoLearner/>
            </span>
            <div className={"div-button-screen"}>
                <button onClick={handleScreen} className={"button-screen"}>{displayStep ? 'next' : 'back'}</button>
            </div>
        </>
    )
}