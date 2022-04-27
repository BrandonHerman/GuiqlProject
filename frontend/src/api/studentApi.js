import axios from 'axios';
import { hostname } from './repositoryConfig';

// Create a new student given class_id, first_name, last_name, and email
export const createStudent = (class_id, first_name, last_name, email) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("class_id", class_id);
    params.append("first_name", first_name);
    params.append("last_name", last_name,);
    params.append("email", email);
    var request = {
        params: params
    };
    axios.post(`${hostname}/createStudent`, {class_id, first_name, last_name, email}, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Get all the students in a class given id
export const getStudentByStudentId = (student_id) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("student_id", student_id);

    var request = {
        params: params
    };
    axios.get(`${hostname}/searchStudentById/${student_id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// I need to get the students based on their university
export const getStudentByCollegeId = (college_id) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("college_id", college_id);
    var request = {
        params: params
    };
    axios.get(`${hostname}/${college_id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});



// Get all the students in a class given class_id
export const getStudentsByClassId = (class_id) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("class_id", class_id);

    var request = {
        params: params
    };
    axios.get(`${hostname}/${class_id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});