import Countdown, { CountdownApi } from "react-countdown";
import {useState} from "react";

export const CountDownNPM = () =>{

    const [ timeDownerMinutes, setTimeDownerMinutes] = useState(0)
    const [ timeDownerSeconds, setTimeDownerSeconds] = useState(0)
    const [ continueTime, setContinueTime] = useState(false)
    const [ timeGetter, setTimeGetter ] =  useState(10000)

    const getTimeDownMinute = (event) =>{
        event.preventDefault()

        console.log(event.target.valueAsNumber)
        setTimeDownerMinutes(event.target.valueAsNumber)

    }

    const getTimeDownSeconds = (event) =>{
        event.preventDefault()

        console.log(event.target.valueAsNumber)
        setTimeDownerSeconds(event.target.valueAsNumber)

    }

    const handleSubmit = () =>{
        const valueMinute = timeDownerMinutes * 1000 * 60
        const valueSeconds = timeDownerSeconds * 1000
        setTimeGetter(valueMinute + valueSeconds)
    }

    const switchIng = () => {
        if(!continueTime)
            setContinueTime(true)
        else {
            setContinueTime(false)
        }
    }

    const handleUpdate= () =>{
        // this.forceUpdate()
    }

    const getApi = (api) =>{
        if (continueTime){
            api && api.start()
            console.log("si")
        } else {
            api && api.pause()
            console.log("no")
        }
        console.log(api)
    }

    return(
        <section className={"section-countdown"}>
            <Countdown className={"countdown-npm"}
                       date={Date.now()+timeGetter}
                       autoStart={false}
                       onStart={handleUpdate}
                       onPause={handleUpdate}
                       ref={getApi}
                       controlled={false}

            >
                <p>Time out</p>
            </Countdown>
            <div className={"div-timedown"}>
                <input className={"input-timedown"} onChange={getTimeDownMinute} placeholder={"Min"} type={"number"} step={1} min={0}/>
                <input className={"input-timedown"} onChange={getTimeDownSeconds} placeholder={"Seg"} type={"number"} step={1} min={0}/>
            </div>
            <button onClick={handleSubmit}>click</button>
            <button onClick={switchIng}></button>
            <p>{timeGetter}</p>
        </section>
    )
}