import axios from 'axios';
import { hostname } from './repositoryConfig';



// I need to get the professors based on their university
export const getProfessorByUniversity = (university) => new Promise((resolve, reject) => {
    axios.get(`${hostname}/${university}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});