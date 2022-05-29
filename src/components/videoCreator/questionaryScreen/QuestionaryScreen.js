import React, { Component } from 'react'
import {hot} from "react-hot-loader";

class QuestionaryScreen extends Component{
    state = {
        manydisplay: false,
        manyCheckBoxCorrect: true,
        manyCheckBoxIncorrect: false,
    }

    handleSelectMany = () => {
        this.setState({ manydisplay: !this.state.manydisplay})
    }

    handleTypeAnsware = () => {
        this.setState({ manyCheckBoxCorrect: !this.state.manyCheckBoxCorrect})
        this.setState({ manyCheckBoxIncorrect: !this.state.manyCheckBoxIncorrect})
    }

    render() {
        const {manydisplay, manyCheckBoxCorrect, manyCheckBoxIncorrect} = this.state
        return (
            <section className={"questionary-section"}>
                <div className={"questionary-container"}>
                    <span className={"text-background"}>
                        Select an option
                    </span>
                {/*  Aqui insertar lo relacionado a la pregunta  */}
                    <article className={false ?"question-display-open--true" : "question-display-open--false"}>
                    {/*  Pregunta abierta  */}
                    </article>
                    <article className={manydisplay ?"question-display-many--true" : "question-display-many--false"}>
                        <section className={"question-container-modify"}>
                            <input className={"question-input"} type={"text"} placeholder={"Write your question..."}/>
                        </section>
                        <section className={"answares-container"}>
                            <div className={"answares-container-components"}>
                                <div className={"answares-container-modify"}>
                                    <div className={"button-select-div"}>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware}>
                                            <span
                                                className={manyCheckBoxCorrect
                                                    ? "correct-answare-true"
                                                    : "correct-answare-false"}>
                                            </span>
                                        </button>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware}>
                                            <span
                                                className={manyCheckBoxIncorrect
                                                    ? "incorrect-answare-true"
                                                    : "incorrect-answare-false"}>
                                            </span>
                                        </button>
                                    </div>
                                    <input className={"answare-input"} type={"text"} placeholder={"Write the option..."}/>
                                </div>
                                <button className={"delete-option-button"}><span className={"delete-icon"}></span></button>
                            </div>
                            <div className={"answares-container-components"}>
                                <div className={"answares-container-modify"}>
                                    <div className={"button-select-div"}>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware}>
                                            <span
                                                className={manyCheckBoxCorrect
                                                    ? "correct-answare-true"
                                                    : "correct-answare-false"}>
                                            </span>
                                        </button>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware}>
                                            <span
                                                className={manyCheckBoxIncorrect
                                                    ? "incorrect-answare-true"
                                                    : "incorrect-answare-false"}>
                                            </span>
                                        </button>
                                    </div>
                                    <input className={"answare-input"} type={"text"} placeholder={"Write the option..."}/>
                                </div>
                                <button className={"delete-option-button"}><span className={"delete-icon"}></span></button>
                            </div>
                            <div className={"answares-container-components"}>
                                <div className={"answares-container-modify"}>
                                    <div className={"button-select-div"}>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware}>
                                            <span
                                                className={manyCheckBoxCorrect
                                                    ? "correct-answare-true"
                                                    : "correct-answare-false"}>
                                            </span>
                                        </button>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware}>
                                            <span
                                                className={manyCheckBoxIncorrect
                                                    ? "incorrect-answare-true"
                                                    : "incorrect-answare-false"}>
                                            </span>
                                        </button>
                                    </div>
                                    <input className={"answare-input"} type={"text"} placeholder={"Write the option..."}/>
                                </div>
                                <button className={"delete-option-button"}><span className={"delete-icon"}></span></button>
                            </div>
                            <div className={"answares-container-components"}>
                                <div className={"answares-container-modify"}>
                                    <div className={"button-select-div"}>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware}>
                                            <span
                                                className={manyCheckBoxCorrect
                                                    ? "correct-answare-true"
                                                    : "correct-answare-false"}>
                                            </span>
                                        </button>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware}>
                                            <span
                                                className={manyCheckBoxIncorrect
                                                    ? "incorrect-answare-true"
                                                    : "incorrect-answare-false"}>
                                            </span>
                                        </button>
                                    </div>
                                    <input className={"answare-input"} type={"text"} placeholder={"Write the option..."}/>
                                </div>
                                <button className={"delete-option-button"}><span className={"delete-icon"}></span></button>
                            </div>
                        </section>
                        <section className={"button-modify-many"}>
                            <div className={"buttons-container"}>
                                <button className={"button-modify"}><span className={"ok-icon"}></span></button>
                                <button className={"button-modify"}><span className={"add-icon"}></span></button>
                                <button className={"button-modify"}><span className={"remove-icon"}></span></button>
                            </div>
                        </section>
                    </article>
                    <article className={true ?"question-display-one--true" : "question-display-one--false"}>
                    {/*  Pregunta opcion una respuesta */}
                    </article>
                </div>
                <div className={"questioner-bar--controls"}>
                    <button className={"question-button"}><div><span className={"button-orange"}></span>Open Question</div></button>
                    <button className={manydisplay ? "many-question-button-true" : "many-question-button-false"} onClick={this.handleSelectMany}><div><span className={"button-blue"}></span>Multiple Answare</div></button>
                    <button className={"question-button"}><div><span className={"button-green"}></span>One Answare</div></button>
                </div>
            </section>
        );
    }
}

export default hot(module)(QuestionaryScreen)