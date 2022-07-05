import {useState} from "react";

export const useUpdate = () =>{
    const [updateData, setUpdateData] = useState(false)

    const handleState = () =>{
        setUpdateData( !updateData)

        console.log(updateData)
    }

    return {updateData, handleState}
}