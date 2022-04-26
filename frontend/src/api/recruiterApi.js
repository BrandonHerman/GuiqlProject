import axios from 'axios';

//make sure to get the proper apiEndpoint and Key as well as proper apiConfig
//const recruiterBaseURL = 'https://api.guiql.com/recruiter';
//const profBaseURL = 'https://api.guiql.com/professor';
//const stuBaseURL = 'https://api.guiql.com/student';
// const apiConfig = {
//    headers: {
//        Authorization: 'gstoehr'
//    }
// };



// Get the Recruiter's bio based on their id
export const getRecruiterBioById = (recruiterId) => new Promise((resolve, reject) => {
    axios.get(`${recruiterBaseURL}/${recruiterId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});


// I need to get the Recruiter's bio based on their university
export const getRecruiterBioByUniversity = (university) => new Promise((resolve, reject) => {
    axios.get(`${recruiterBaseURL}/${university}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});


// I need to get the professors based on their university
export const getProfessorByUniversity = (university) => new Promise((resolve, reject) => {
    axios.get(`${profBaseURL}/${university}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});


// I need to get the students based on their university
export const getStudentByUniversity = (university) => new Promise((resolve, reject) => {
    axios.get(`${stuBaseURL}/${university}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});


// I need to update the Recruiter's bio
export const updateRecruiterBio = (email, password, bio, image) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("email", email);
    params.append("password", password);
    params.append("bio", bio);
    params.append("image", image);
    var request = {
        params: params
    };

    axios.post(`${recruiterBaseURL}/${request}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });

    //or try 
    // axios.post(`${recruiterBaseURL}/`, {email, password, bio, image}, apiConfig)
    //     .then(x => resolve(x.data))
    //     .catch(x => {
    //         alert(x);
    //         reject(x);
    //     });
});