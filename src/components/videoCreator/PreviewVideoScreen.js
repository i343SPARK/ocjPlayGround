import TestFor from "./testFor/TestFor";
import {MultipleAnsware} from "./videoPreviewOptions/TypeQuestions/MultipleAnsware";
import {Link} from "react-router-dom";


export const PreviewVideoScreen = () =>{
    return(
        <>
            <section className={"preview-video"}>
                <TestFor/>
                <MultipleAnsware/>
                <div className={"div-button-screen"}>
                    <Link to={"/creatorVideo"} className="button-screen">Back</Link>
                </div>
            </section>
        </>
    )
}