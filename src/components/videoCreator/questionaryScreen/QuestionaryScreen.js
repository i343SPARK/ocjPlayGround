import React, { Component } from 'react'
import {hot} from "react-hot-loader";

class QuestionaryScreen extends Component{
    render() {
        return (
            <section className={"questionary-section"}>
                <div className={"questionary-container"}>
                    <span className={"text-background"}>
                        Select an option
                    </span>
                {/*  Aqui insertar lo relacionado a la pregunta  */}
                    <article>
                    {/*  Pregunta abierta  */}
                    </article>
                    <article>
                    {/*  Pregunta opcion multiple respuesta */}
                    </article>
                    <article>
                    {/*  Pregunta opcion una respuesta */}
                    </article>
                </div>
                <div className={"questioner-bar--controls"}>
                    <button className={"question-button"}><div><span className={"button-orange"}></span>Open Question</div></button>
                    <button className={"question-button"}><div><span className={"button-blue"}></span>Multiple Answare</div></button>
                    <button className={"question-button"}><div><span className={"button-green"}></span>One Answare</div></button>
                </div>
            </section>
        );
    }
}

export default hot(module)(QuestionaryScreen)