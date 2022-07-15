import {useState} from "react";
import axios from "axios";
import {useUpdate} from "../../VideoHooks/useUpdate";

export const MultipleOptionDisplay = () =>{

    const [display, setDisplay] = useState(false)
    const [checkBoxCorrect1, setCheckBoxCorrect1] = useState(true)
    const [checkBoxCorrect2, setCheckBoxCorrect2] = useState(true)
    const [checkBoxCorrect3, setCheckBoxCorrect3] = useState(true)
    const [checkBoxIncorrect1, setCheckBoxIncorrect1] = useState(false)
    const [checkBoxIncorrect2, setCheckBoxIncorrect2] = useState(false)
    const [checkBoxIncorrect3, setCheckBoxIncorrect3] = useState(false)
    const [question, setQuestion] = useState("")
    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [option3, setOption3] = useState("")

    const questionHooks = useUpdate()

    const handleSelectMany = () => {
        setDisplay( !display)
    }

    const handleTypeAnsware_1 = () => {
        setCheckBoxCorrect1( !checkBoxCorrect1)
        setCheckBoxIncorrect1( !checkBoxIncorrect1)
    }
    const handleTypeAnsware_2 = () => {
        setCheckBoxCorrect2( !checkBoxCorrect2)
        setCheckBoxIncorrect2( !checkBoxIncorrect2)
    }
    const handleTypeAnsware_3 = () => {
        setCheckBoxCorrect3( !checkBoxCorrect3)
        setCheckBoxIncorrect3( !checkBoxIncorrect3)
    }

    const handleTextQuestion = (a) =>{
        a.preventDefault()

        setQuestion( a.target.value)
        console.log(question)
    }

    const handleTextansware1 = (a) =>{
        a.preventDefault()

        setOption1(a.target.value)
        console.log(option1)
    }

    const handleTextansware2 = (a) =>{
        a.preventDefault()

        setOption2(a.target.value)
        console.log(option2)

    }

    const handleTextansware3 = (a) =>{
        a.preventDefault()

        setOption3(a.target.value)
        console.log(option3)

    }

    const setDataJSON = () =>{
        axios.post("http://localhost:8000/question-with-many", {
            question: question,
            option_1: option1,
            option_2: option2,
            option_3: option3,
        }).then(resp => console.log(resp.data)).catch(err => console.log(err))

        questionHooks.handleState()

    }

    return(
        <>
            <section className={"questionary-section"}>
                <div className={"questionary-container"}>
                    <span className={"text-background"}>
                        Select an option
                    </span>
                    {/*  Aqui insertar lo relacionado a la pregunta  */}
                    <article className={false ?"question-display-open--true" : "question-display-open--false"}>
                        {/*  Pregunta abierta  */}
                    </article>
                    <article className={display
                        ? "question-display-many--true"
                        : "question-display-many--false"}
                    >
                        <section className={"question-container-modify"}>
                            <input className={"question-input"} type={"text"} placeholder={"Write your question..."} onChange={handleTextQuestion}/>
                        </section>
                        <section className={"answares-container"}>
                            <div className={"answares-container-components"}>
                                <div className={"answares-container-modify"}>
                                    <div className={"button-select-div"}>
                                        <button className={"button-type-answare"}
                                                onClick={handleTypeAnsware_1}>
                                            <span
                                                className={checkBoxCorrect1
                                                    ? "correct-answare-true"
                                                    : "correct-answare-false"}
                                            >
                                            </span>
                                        </button>
                                        <button className={"button-type-answare"}
                                                onClick={handleTypeAnsware_1}>
                                            <span
                                                className={checkBoxIncorrect1
                                                    ? "incorrect-answare-true"
                                                    : "incorrect-answare-false"}
                                            >
                                            </span>
                                        </button>
                                    </div>
                                    <input className={"answare-input"} type={"text"} placeholder={"Write the option..."} onChange={handleTextansware1}/>
                                </div>
                                <button className={"delete-option-button"}><span className={"delete-icon"}></span></button>
                            </div>
                            <div className={"answares-container-components"}>
                                <div className={"answares-container-modify"}>
                                    <div className={"button-select-div"}>
                                        <button className={"button-type-answare"}
                                                onClick={handleTypeAnsware_2}>
                                            <span
                                                className={checkBoxCorrect2
                                                    ? "correct-answare-true"
                                                    : "correct-answare-false"}
                                            >
                                            </span>
                                        </button>
                                        <button className={"button-type-answare"}
                                                onClick={handleTypeAnsware_2}>
                                            <span
                                                className={checkBoxIncorrect2
                                                    ? "incorrect-answare-true"
                                                    : "incorrect-answare-false"}>
                                            </span>
                                        </button>
                                    </div>
                                    <input className={"answare-input"} type={"text"} placeholder={"Write the option..."} onChange={handleTextansware2}/>
                                </div>
                                <button className={"delete-option-button"}><span className={"delete-icon"}></span></button>
                            </div>
                            <div className={"answares-container-components"}>
                                <div className={"answares-container-modify"}>
                                    <div className={"button-select-div"}>
                                        <button className={"button-type-answare"}
                                                onClick={handleTypeAnsware_3}>
                                            <span
                                                className={checkBoxCorrect3
                                                    ? "correct-answare-true"
                                                    : "correct-answare-false"}>
                                            </span>
                                        </button>
                                        <button className={"button-type-answare"}
                                                onClick={handleTypeAnsware_3}>
                                            <span
                                                className={checkBoxIncorrect3
                                                    ? "incorrect-answare-true"
                                                    : "incorrect-answare-false"}>
                                            </span>
                                        </button>
                                    </div>
                                    <input className={"answare-input"} type={"text"} placeholder={"Write the option..."} onChange={handleTextansware3}/>
                                </div>
                                <button className={"delete-option-button"}><span className={"delete-icon"}></span></button>
                            </div>
                        </section>
                        <section className={"button-modify-many"}>
                            <div className={"buttons-container"}>
                                <button className={"button-modify"}><span className={"ok-icon"} onClick={setDataJSON}></span></button>
                                <button className={"button-modify"}><span className={"add-icon"}></span></button>
                                <button className={"button-modify"}><span className={"remove-icon"}></span></button>
                            </div>
                        </section>
                    </article>
                    <article className={true ?"question-display-one--true" : "question-display-one--false"}>
                    </article>
                </div>
                <div className={"questioner-bar--controls"}>
                    <button className={"question-button"}><div><span className={"button-orange"}></span>Open Question</div></button>
                    <button className={display ? "many-question-button-true" : "many-question-button-false"} onClick={handleSelectMany}><div><span className={"button-blue"}></span>Multiple Answare</div></button>
                    <button className={"question-button"}><div><span className={"button-green"}></span>One Answare</div></button>
                </div>
            </section>
        </>
    )
}