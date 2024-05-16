import React from 'react';
import {Route, Routes} from "react-router-dom";
import Landing from "../page/landing";
import Course from "../page/course";
import MasterClass from "../page/master-class";
import UnAuthContainer from "../components/unAuthContainer";
import AuthComponent from "../components/authComponent";
import CourseItem from "../page/courseItem";
import StandartItem from "../page/standartItem";
import FilmBookMusic from "../page/filmBookMusic";
import MediaItem from "../page/mediaItem";
import Motivation from "../page/motivation";
import Article from "../page/article";
import Service from "../page/service";
import News from "../page/news";
import Contact from "../page/contact";
import Review from "../page/review";


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
                <Route path={'master-class/:id'} element={<StandartItem title={'Мастер классы'} type={1}/>}/>
                <Route path={'master-class'} element={<MasterClass/>}/>
                <Route path={'media'} element={<FilmBookMusic/>}/>
                <Route path={'media/:type'} element={<MediaItem/>}/>
                <Route path={'motivation'} element={<Motivation/>}/>
                <Route path={'motivation/:id'} element={<StandartItem title={'Мотивация'}/>}/>
                <Route path={'article'} element={<Article/>}/>
                <Route path={'article/:id'} element={<StandartItem title={'Полезная статья'}/>}/>
                <Route path={'news'} element={<News/>}/>
                <Route path={'news/:id'} element={<StandartItem title={'Новость'}/>}/>
                <Route path={'service'} element={<Service/>}/>
                <Route path={'contact'} element={<Contact/>}/>
                <Route path={'review'} element={<Review/>}/>
            </Route>

            <Route path={'*'} element={<Landing/>}/>
        </Routes>
    );
};

export default Router;
