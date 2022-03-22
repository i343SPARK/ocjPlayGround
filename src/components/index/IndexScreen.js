import React from 'react';
import { Bar } from '../../Bar';
import { IndexDictionary } from './IndexDictionary';
import { IndexTextAudio } from './IndexTextAudio';


export default function IndexScreen(){
    return (
    <>
    <Bar/>
        <div className='center-content'>
            <IndexTextAudio/>
            <IndexDictionary/>
        </div>
    </>
    );
}
