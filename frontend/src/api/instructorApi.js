import axios from 'axios';
import { hostname } from './repositoryConfig';

//make sure to get the proper apiEndpoint and Key as well as proper apiConfig
//const profBaseURL = 'https://api.guiql.com/professor';
// const apiConfig = {
//    headers: {
//        Authorization: 'gstoehr'
//    }
// };

//const profBaseURL = 'https://api.guiql.com/professor';
//const classBaseURL = 'https://api.guiql.com/class';
//const stuBaseURL = 'https://api.guiql.com/student';


const hostName = 'team1dockercompose.ch1rnpkjnswq.us-east-1.rds.amazonaws.com';

//CREATE CLASS PAGE CALLS

// Create a class with the student information
export const createClass = (class_name, class_day, class_time, students, prof_id) => new Promise((resolve, reject) => {
    //CREATES THE CLASS
    size = students.length;
    group_count = Math.ceil(size / 4);
    axios.post(`${classBaseURL}/create`, {class_name, class_day, class_time, size, group_count, prof_id}, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });


    //CREATES THE STUDENTS
    university_id = getUniversityByProfId(prof_id);
    class_id = getClassByTimes(class_day, class_time, university_id);
    for (let i = 0; i < students.length; i++) {
        var params = new URLSearchParams();
        params.append("username", username);
        params.append("password", password);
        params.append("first_name", first);
        params.append("last_name", last);
        params.append("email", email);
        params.append("in_team", false);
        params.append("prof_id", prof_id);
        params.append("college_id", university_id);
        params.append("class_id", class_id);
    
        params.append()
        var request = {
            params: params
        };
    
        axios.post(`${stuBaseURL}/${request}`, apiConfig)
            .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);
            });
    }

    //or try 
    // axios.post(`${recruiterBaseURL}/`, {email, password, bio, image}, apiConfig)
    //     .then(x => resolve(x.data))
    //     .catch(x => {
    //         alert(x);
    //         reject(x);
    //     });
});




//INSTRUCTOR STUDENT VIEW ROUTES

// Get the group count given instructor id and class id
export const getGroupCount = (instructor_id, class_id) => new Promise((resolve, reject) => {
    axios.get(`${classBaseURL}/${instructor_id}/${class_id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Update a students team given student id and class id
export const updateStudentTeam = (student_id, class_id, team_id) => new Promise((resolve, reject) => {
    axios.put(`${classBaseURL}/${student_id}/${class_id}/${team_id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Create a new student given class_id, first_name, last_name, and email
export const createStudent = (class_id, first_name, last_name, email) => new Promise((resolve, reject) => {
    axios.post(`${stuBaseURL}/create`, {class_id, first_name, last_name, email}, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Get all the students in a class given class_id
export const getStudents = (class_id) => new Promise((resolve, reject) => {
    axios.get(`${stuBaseURL}/${class_id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

