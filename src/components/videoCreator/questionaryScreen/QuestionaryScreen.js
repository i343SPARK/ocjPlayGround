import React, {Component} from 'react'
import {hot} from "react-hot-loader";
import axios from "axios";

class QuestionaryScreen extends Component{
    state = {
        manyDisplay: false,
        manyCheckBoxCorrect_1: true,
        manyCheckBoxIncorrect_1: false,
        manyCheckBoxCorrect_2: true,
        manyCheckBoxIncorrect_2: false,
        manyCheckBoxCorrect_3: true,
        manyCheckBoxIncorrect_3: false,
        question: "",
        option_1: "",
        option_2: "",
        option_3: "",
    }

    handleSelectMany = () => {
        this.setState({ manyDisplay: !this.state.manyDisplay})
    }

    handleTypeAnsware_1 = () => {
        this.setState({ manyCheckBoxCorrect_1: !this.state.manyCheckBoxCorrect_1})
        this.setState({ manyCheckBoxIncorrect_1: !this.state.manyCheckBoxIncorrect_1})
    }
    handleTypeAnsware_2 = () => {
        this.setState({ manyCheckBoxCorrect_2: !this.state.manyCheckBoxCorrect_2})
        this.setState({ manyCheckBoxIncorrect_2: !this.state.manyCheckBoxIncorrect_2})
    }
    handleTypeAnsware_3 = () => {
        this.setState({ manyCheckBoxCorrect_3: !this.state.manyCheckBoxCorrect_3})
        this.setState({ manyCheckBoxIncorrect_3: !this.state.manyCheckBoxIncorrect_3})
    }

    handleTextQuestion = (a) =>{
        a.preventDefault()

        this.setState({question: a.target.value})
        console.log(this.state.question)
    }

    handleTextansware1 = (a) =>{
        a.preventDefault()

        this.setState({option_1: a.target.value})
        console.log(this.state.option_1)

    }

    handleTextansware2 = (a) =>{
        a.preventDefault()

        this.setState({option_2: a.target.value})
        console.log(this.state.option_2)

    }

    handleTextansware3 = (a) =>{
        a.preventDefault()

        this.setState({option_3: a.target.value})
        console.log(this.state.option_3)

    }

    setDataJSON = () =>{
        axios.post("http://localhost:8000/question-with-many", {
            question: this.state.question,
            option_1: this.state.option_1,
            option_2: this.state.option_2,
            option_3: this.state.option_3,
        }).then(resp => console.log(resp.data)).catch(err => console.log(err))
    }


    render() {

        const {
            manyDisplay,
            manyCheckBoxCorrect_1, manyCheckBoxIncorrect_1,
            manyCheckBoxCorrect_2, manyCheckBoxIncorrect_2,
            manyCheckBoxCorrect_3, manyCheckBoxIncorrect_3
        } = this.state
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
                    <article className={manyDisplay
                        ? "question-display-many--true"
                        : "question-display-many--false"}
                    >
                        <section className={"question-container-modify"}>
                            <input className={"question-input"} type={"text"} placeholder={"Write your question..."} onChange={this.handleTextQuestion}/>
                        </section>
                        <section className={"answares-container"}>
                            <div className={"answares-container-components"}>
                                <div className={"answares-container-modify"}>
                                    <div className={"button-select-div"}>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware_1}>
                                            <span
                                                className={manyCheckBoxCorrect_1
                                                    ? "correct-answare-true"
                                                    : "correct-answare-false"}
                                            >
                                            </span>
                                        </button>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware_1}>
                                            <span
                                                className={manyCheckBoxIncorrect_1
                                                    ? "incorrect-answare-true"
                                                    : "incorrect-answare-false"}
                                            >
                                            </span>
                                        </button>
                                    </div>
                                    <input className={"answare-input"} type={"text"} placeholder={"Write the option..."} onChange={this.handleTextansware1}/>
                                </div>
                                <button className={"delete-option-button"}><span className={"delete-icon"}></span></button>
                            </div>
                            <div className={"answares-container-components"}>
                                <div className={"answares-container-modify"}>
                                    <div className={"button-select-div"}>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware_2}>
                                            <span
                                                className={manyCheckBoxCorrect_2
                                                    ? "correct-answare-true"
                                                    : "correct-answare-false"}
                                            >
                                            </span>
                                        </button>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware_2}>
                                            <span
                                                className={manyCheckBoxIncorrect_2
                                                    ? "incorrect-answare-true"
                                                    : "incorrect-answare-false"}>
                                            </span>
                                        </button>
                                    </div>
                                    <input className={"answare-input"} type={"text"} placeholder={"Write the option..."} onChange={this.handleTextansware2}/>
                                </div>
                                <button className={"delete-option-button"}><span className={"delete-icon"}></span></button>
                            </div>
                            <div className={"answares-container-components"}>
                                <div className={"answares-container-modify"}>
                                    <div className={"button-select-div"}>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware_3}>
                                            <span
                                                className={manyCheckBoxCorrect_3
                                                    ? "correct-answare-true"
                                                    : "correct-answare-false"}>
                                            </span>
                                        </button>
                                        <button className={"button-type-answare"}
                                                onClick={this.handleTypeAnsware_3}>
                                            <span
                                                className={manyCheckBoxIncorrect_3
                                                    ? "incorrect-answare-true"
                                                    : "incorrect-answare-false"}>
                                            </span>
                                        </button>
                                    </div>
                                    <input className={"answare-input"} type={"text"} placeholder={"Write the option..."} onChange={this.handleTextansware3}/>
                                </div>
                                <button className={"delete-option-button"}><span className={"delete-icon"}></span></button>
                            </div>
                        </section>
                        <section className={"button-modify-many"}>
                            <div className={"buttons-container"}>
                                <button className={"button-modify"}><span className={"ok-icon"} onClick={this.setDataJSON}></span></button>
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
                    <button className={manyDisplay ? "many-question-button-true" : "many-question-button-false"} onClick={this.handleSelectMany}><div><span className={"button-blue"}></span>Multiple Answare</div></button>
                    <button className={"question-button"}><div><span className={"button-green"}></span>One Answare</div></button>
                </div>
            </section>
        );
    }
}

export default hot(module)(QuestionaryScreen)