import React, {useEffect, useState} from "react";

export const CountDownHook = () =>{

    const CalculateTimeLeft = () =>{
        let year = new Date().getFullYear()
        let difference = +new Date(`10/01/${year}`) - +new Date()

        let timeLeft = {}

        if(difference > 0){
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }

        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(CalculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(CalculateTimeLeft())
        }, 1000)

        return () => clearTimeout(timer)
    })

    const timerComponents = []

    Object.keys(timeLeft).forEach((interval) => {
        if(!timeLeft[interval]){
            return
        }

        timerComponents.push(
            <span>
            {timeLeft[interval]}{interval}{""}
        </span>
        )
    })

    return(
        <section>
            <div>
                <h1>Hacktoberfest 2020 countdown</h1>
                <h2>With React Hooks</h2>
                {timerComponents.length ? timerComponents : <span>Time's up!!</span>}
            </div>
        </section>
    )
}