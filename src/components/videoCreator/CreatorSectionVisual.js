import TestFor from "./testFor/TestFor";
import {MultipleOptionDisplay} from "./questionaryScreen/multipleOption/MultipleOptionDisplay";


export const CreatorSectionVisual = () =>{


    return(
        <section className={"video-creator--container"}>
            <article className={"video-section-article"}>
                <div className={"video-sect-one"}>
                    <TestFor/>
                </div>
                <div className={"video-sect-two"}>
                    <MultipleOptionDisplay/>
                </div>
            </article>
        </section>
    )
}