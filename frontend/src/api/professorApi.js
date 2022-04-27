import axios from 'axios';
import { hostname } from './repositoryConfig';

// I need to get the professors based on their university
export const getProfessorByCollegeId = (college_id) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("college_id", college_id);

    var request = {
        params: params
    };
    axios.get(`${hostname}/getProfessorByCollegeId/${college_id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

