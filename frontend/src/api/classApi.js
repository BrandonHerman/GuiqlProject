import axios from 'axios';
import { hostname } from './repositoryConfig';
import collegeApi from './collegeApi';

collegeApi = new collegeApi();

// Create a class with the student information
export const createClass = (class_name, class_day, class_time, students, prof_id) => new Promise((resolve, reject) => {
    //CREATES THE CLASS
    size = students.length;
    group_count = Math.ceil(size / 4);
    axios.post(`${hostname}/createClass`, {class_name, class_day, class_time, size, group_count, prof_id}, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });


    //CREATES THE STUDENTS
    university_id = collegeApi.getUniversityByProfId(prof_id);
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
    
        axios.post(`${hostname}/CreateStudent/${request}`, apiConfig)
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


// Get the group count given instructor id and class id
export const getGroupCount = (class_id) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
        params.append("class_id", class_id);
    
        params.append()
        var request = {
            params: params
        };
    axios.get(`${hostname}/getNumberOfGroups/`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});



// Get the class given the class day and class time
export const getClassByTimes = (class_day, class_time, college_id) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
        params.append("class_day", class_day);
        params.append("class_time", class_time);
        params.append("college_id", college_id);
    
        params.append()
        var request = {
            params: params
        };
    axios.get(`${hostname}/`, requests, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});