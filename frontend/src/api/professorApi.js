import axios from 'axios';
import { hostname } from './repositoryConfig';

// I need to get the professors based on their university
export const getProfessorByUniversity = (university) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("college_id", university);
    params.append()
        var request = {
            params: params
        };

    axios.get(`${hostname}/getProfessorByUniversity/${university}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

