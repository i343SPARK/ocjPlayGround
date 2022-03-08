import React from 'react';
import { IndexDictionary } from './IndexDictionary';
import { IndexTextAudio } from './IndexTextAudio';


export default function IndexScreen(){
    return (
        <div className='center-content'>
            <IndexTextAudio/>
            <IndexDictionary/>
        </div>
    );
}
