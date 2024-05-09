import React from 'react';
import {Route, Routes} from "react-router-dom";
import Landing from "../page/landing";
import Course from "../page/course";
import MasterClass from "../page/master-class";


const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Landing/>}/>
            <Route path={'/course'} element={<Course/>}/>
            <Route path={'/master-class'} element={<MasterClass/>}/>
            <Route path={'*'} element={<Landing/>}/>
        </Routes>
    );
};

export default Router;
