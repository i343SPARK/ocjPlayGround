import React from 'react'

export const QuestionOne = () => {
    return (
        <>
            <div className="question-container">
                <h2>1.- Como avanzaba Linguini?</h2>
                <div>
                    <input type={"radio"} id={"a"} name={"q1"} value={"a"}/>
                    <label htmlFor="a"> Con zapatos</label>
                </div>
                <div>
                    <input type={"radio"} id={"b"} name={"q1"} value={"b"}/>
                    <label htmlFor="b"> Con tennis</label>
                </div>
                <div>
                    <input type={"radio"} id={"c"} name={"q1"} value={"c"}/>
                    <label htmlFor="c"> Con patines</label>
                </div>
                <div>
                    <input type={"radio"} id={"d"} name={"q1"} value={"d"}/>
                    <label htmlFor="d"> Con huaraches</label>
                </div>
            </div>
        </>
    )
}
