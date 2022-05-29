import TestFor from "./testFor/TestFor";
import QuestionaryScreen from "./questionaryScreen/QuestionaryScreen";


export const CreatorSectionVisual = () =>{
    return(
        <section className={"video-creator--container"}>
            <article className={"video-section-article"}>
                <div className={"video-sect-one"}>
                    <TestFor/>
                </div>
                <div className={"video-sect-two"}>
                    <QuestionaryScreen/>
                </div>
            </article>
        </section>
    )
}