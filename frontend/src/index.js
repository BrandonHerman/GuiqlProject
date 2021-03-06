import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import InstructorStudentsView from '/pages/classviews/instructorstudentsview';
import InstructorSignIn from './pages/signinviews/instructorsignin';
import InstructorSignUp from './pages/signinviews/instructorsignup';
import InstructorClassHome from './pages/signinviews/instructorclasshome';
import RecruiterSignIn from './pages/signinviews/recruitersigin';
import RecruiterSignUp from './pages/signinviews/recruitersignup';

const rootElement = document.getElementById("root");
render( //browserrouter and routes allows react router to move views based on what the URL extension is

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/studentsignin" element={<App />} />
                <Route path="/instructorsignin" element={<InstructorSignIn />} />
                <Route path="/instructorsignup" element={<InstructorSignUp />} />
                <Route path="/classeshome" element={<InstructorClassHome />} />
                <Route path="/recruitersignup" element={<RecruiterSignUp/>} />
                <Route path="/recruitersignin" element={<RecruiterSignIn />} />
                <Route path="/instructorstudentsview" element={<InstructorStudentsView/>} />
            </Routes>
        </BrowserRouter>,

    rootElement
);
