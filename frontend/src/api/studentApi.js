import axios from 'axios';
import { hostname } from './repositoryConfig';



// I need to get the students based on their university
export const getStudentByUniversity = (university) => new Promise((resolve, reject) => {
    axios.get(`${stuBaseURL}/${university}`, apiConfig)
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