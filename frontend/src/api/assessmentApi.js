import axios from 'axios';
import { hostname } from './repositoryConfig';



// Get the state of the assessment flag based on team_id and prof_if
export const getAssessmentFlagByTeamId = (teamId, profId) => new Promise((resolve, reject) => {
    axios.get(`${hostname}/${teamId}/${profId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});



// Get the assessment link given team_id and prof_id
export const getAssessmentLinkByTeamId = (teamId, profId) => new Promise((resolve, reject) => {
    axios.get(`${hostname}/${teamId}/${profId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});
