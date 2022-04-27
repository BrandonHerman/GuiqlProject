import axios from 'axios';
import { hostname } from './repositoryConfig';



// Update a students team given student id and class id
export const updateStudentTeam = (student_id, class_id, team_id) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("student_id", student_id);
    params.append("class_id", class_id);
    params.append("team_id", team_id);
    params.append()
        var request = {
            params: params
        };
    axios.put(`${hostname}/${student_id}/${class_id}/${team_id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});