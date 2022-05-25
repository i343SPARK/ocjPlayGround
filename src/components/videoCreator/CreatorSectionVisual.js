import TestFor from "./testFor/TestFor";
import QuestionaryScreen from "./questionaryScreen/QuestionaryScreen";


export const CreatorSectionVisual = () =>{
    return(
        <section className={"video-creator--container"}>
            <div className={"video-sect-one"}>
                <TestFor/>
            </div>
            <div className={"video-sect-two"}>
                <QuestionaryScreen/>
            </div>
        </section>
    )
}