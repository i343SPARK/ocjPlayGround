import {useEffect, useState} from "react";

export const MultipleAnsware = () =>{

    const [showQuestion, setShowQuestion] = useState(false)
    const [option1, setOption1] = useState(false)
    const [option2, setOption2] = useState(false)
    const [option3, setOption3] = useState(false)
    const [dataQuestion, setDataQuestion] = useState([])

    const handleQuestionScreen = () =>{
        setShowQuestion( !showQuestion )
    }

    const getDatabase = () =>{
        fetch("http://localhost:8000/question-with-many").then((res) => res.json()).then((data) => {
            setDataQuestion(data)
            console.log(dataQuestion)
        })
    }

    const switchOption1 = () =>{
        setOption1( !option1 )
    }

    const switchOption2 = () =>{
        setOption2( !option2 )
    }

    const switchOption3 = () =>{
        setOption3( !option3 )
    }

    return(
        <>
            <section>
                <article className={showQuestion ? "preview-container--question--true" : "preview-container--question--false"}>
                    <div className={"container-question--core-question"}>
                        <h2 className={"core-question"}>Pregunta</h2>
                    </div>
                    <div className={"container-question--options"}>
                        <button className={option1? "option-answare--off" : "option-answare--on"}
                                onClick={switchOption1}>
                            option1
                        </button>
                        <button className={option2? "option-answare--off" : "option-answare--on"}
                                onClick={switchOption2}>
                            option2
                        </button>
                        <button className={option3? "option-answare--off" : "option-answare--on"}
                                onClick={switchOption3}>
                            option3
                        </button>
                    </div>
                    <div className={"next-button--container"}>
                        <button className={"next-button-question"} onClick={handleQuestionScreen}>next</button>
                    </div>
                </article>
            </section>
        </>
    )
}