import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexScreen from '../components/index/IndexScreen'
import { SharingProjectsScreen } from '../components/sharingProjects/SharingProjectsScreen';
import { VideoScreen } from '../components/video/VideoScreen';

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
                </Routes>
            </BrowserRouter>
        </>
    );
}