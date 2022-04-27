import axios from 'axios';
import { hostname } from './repositoryConfig';



// Get University given prof id
export const getUniversityByProfId = (prof_id) => new Promise((resolve, reject) => {
    axios.get(`${hostname}/getCollegByProfId/${prof_id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});