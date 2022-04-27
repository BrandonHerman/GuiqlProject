import axios from 'axios';
import { hostname } from './repositoryConfig';



// Update a students team given student id and class id
export const updateStudentTeam = (student_id, class_id, team_id) => new Promise((resolve, reject) => {
    axios.put(`${hostname}/${student_id}/${class_id}/${team_id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});