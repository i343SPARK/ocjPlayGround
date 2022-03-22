import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import IndexScreen from '../components/index/IndexScreen'
import { SharingProjectsScreen } from '../components/sharingProjects/SharingProjectsScreen';

export const AppRouter = () => {
    return (
        <>
        <div>
            
        </div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<IndexScreen/>} />
                    <Route path='/shareScreen' element={<SharingProjectsScreen/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}