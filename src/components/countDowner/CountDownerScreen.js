import {Bar} from "../../Bar";
import {CountDownHook} from "./CountDownHook";
import {CountDownNPM} from "./CountDownNPM";

export const CountDownerScreen = () =>{
    return(
        <div>
            <Bar/>
            {/*<CountDownHook/>*/}
            <CountDownNPM/>
        </div>
    )
}