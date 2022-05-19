import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexScreen from '../components/index/IndexScreen'
import { SharingProjectsScreen } from '../components/sharingProjects/SharingProjectsScreen';
import { VideoScreen } from '../components/video/VideoScreen';
import {CountDownerScreen} from "../components/countDowner/CountDownerScreen";
import {VideoCreatorScreen} from "../components/videoCreator/VideoCreatorScreen";

export const AppRouter = () => {
    return (
        <>
        {/* <div>
            <Bar/>
        </div> */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<IndexScreen/>} />
                    <Route path='/shareScreen' element={<SharingProjectsScreen/>}/>
                    <Route path='/video' element={<VideoScreen/>}/>
                    <Route path='/count' element={<CountDownerScreen/>}/>
                    <Route path="/creatorVideo" element={<VideoCreatorScreen/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}