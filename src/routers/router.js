import React from 'react';
import {Route, Routes} from "react-router-dom";
import Landing from "../page/landing";
import Course from "../page/course";
import MasterClass from "../page/master-class";
import UnAuthContainer from "../components/unAuthContainer";
import AuthComponent from "../components/authComponent";
import CourseItem from "../page/courseItem";
import StandartItem from "../page/standartItem";


const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={
                <UnAuthContainer>
                    <Landing/>
                </UnAuthContainer>
            }/>

            <Route path={'/lk'} element={<AuthComponent/>}>
                <Route index element={<h1>content</h1>}/>
                <Route path={'course'} element={<Course/>}/>
                <Route path={'course/:id'} element={<CourseItem/>}/>
                <Route path={'master-class/:id'} element={<StandartItem type={1}/>}/>
                <Route path={'master-class'} element={<MasterClass/>}/>
            </Route>

            <Route path={'*'} element={<Landing/>}/>
        </Routes>
    );
};

export default Router;
