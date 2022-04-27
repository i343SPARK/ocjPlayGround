import React from 'react'

export const QuestionTwo = () => {
    return (
        <>
            <div className="question-container">
                <h2>Que habia en la mesa de Ego?</h2>
                <div>
                    <input type={"checkbox"} id={"a"} name={"q1"} value={"a"}/>
                    <label htmlFor="a"> Una libreta y una pluma</label>
                </div>
                <div>
                    <input type={"checkbox"} id={"b"} name={"q1"} value={"b"}/>
                    <label htmlFor="b"> Cubiertos</label>
                </div>
                <div>
                    <input type={"checkbox"} id={"c"} name={"q1"} value={"c"}/>
                    <label htmlFor="c"> Periodicos</label>
                </div>
                <div>
                    <input type={"checkbox"} id={"d"} name={"q1"} value={"d"}/>
                    <label htmlFor="d"> Una copa de vino</label>
                </div>
            </div>
        </>
    )
}
