import React from 'react';
import App from './App';
import {render} from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstructorStudentsView from './pages/classviews/instructorstudentsview';
import InstructorSignIn from './pages/signinviews/instructorsignin';
import InstructorSignUp from './pages/signinviews/instructorsignup';

const rootElement = document.getElementById("root");
render( //browserrouter and routes allows react router to move views based on what the URL extension is
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/instructorstudentsview" element={<App />} />
            <Route path="/instructorsignin" element={<InstructorSignIn />} />
            <Route path="/instructorsignup" element={<InstructorSignUp />} />
        </Routes>
    </BrowserRouter>, 
    rootElement
);
