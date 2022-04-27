import axios from 'axios';
import { hostname } from './repositoryConfig';
//hostname = "team1dockercompose.ch1rnpkjnswq.us-east-1.rds.amazonaws.com"


// Create a new Recruiter using their first_name, last_name, username, and password
export const createRecruiter = async (recruiter_id, first_name, last_name, username, password) => {
    try {
        const result = await axios.post(`http://${hostname}:8000/createRecruiter`, { recruiter_id, first_name, last_name, username, password });
        return result.data;
    } catch (err) {
        console.error('Failed to create new recruiter:', err);
        throw err;
    }
}


// Get the Recruiter's bio based on their id
export const getRecruiterBioById = (recruiterId) => new Promise((resolve, reject) => {
    axios.get(`${hostname}/${recruiterId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});


// // I need to get the Recruiter's bio based on their university
// export const getRecruiterBioByUniversity = (university) => new Promise((resolve, reject) => {
//     axios.get(`${hostname}/${university}`, apiConfig)
//         .then(x => resolve(x.data))
//         .catch(x => {
//             alert(x);
//             reject(x);
//         });
// });


// // I need to get the professors based on their university
// export const getProfessorByUniversity = (university) => new Promise((resolve, reject) => {
//     axios.get(`${profBaseURL}/${university}`, apiConfig)
//         .then(x => resolve(x.data))
//         .catch(x => {
//             alert(x);
//             reject(x);
//         });
// });


// // I need to get the students based on their university
// export const getStudentByUniversity = (university) => new Promise((resolve, reject) => {
//     axios.get(`${stuBaseURL}/${university}`, apiConfig)
//         .then(x => resolve(x.data))
//         .catch(x => {
//             alert(x);
//             reject(x);
//         });
// });


// // I need to update the Recruiter's bio
// export const updateRecruiterBio = (email, password, bio, image) => new Promise((resolve, reject) => {
//     var params = new URLSearchParams();
//     params.append("email", email);
//     params.append("password", password);
//     params.append("bio", bio);
//     params.append("image", image);
//     var request = {
//         params: params
//     };

//     axios.post(`${recruiterBaseURL}/${request}`, apiConfig)
//         .then(x => resolve(x.data))
//         .catch(x => {
//             alert(x);
//             reject(x);
//         });

//     //or try 
//     // axios.post(`${recruiterBaseURL}/`, {email, password, bio, image}, apiConfig)
//     //     .then(x => resolve(x.data))
//     //     .catch(x => {
//     //         alert(x);
//     //         reject(x);
//     //     });
// });