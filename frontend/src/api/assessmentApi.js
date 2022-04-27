import axios from 'axios';
import { hostname } from './repositoryConfig';


const apiConfig = {
    headers: {
        
    }
};


// Get the state of the assessment flag based on team_id and prof_if
export const getAssessmentFlagByProfId= (profId) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append('prof_id', profId);

    params.append()
    var request = {
        params: params
    };
    axios.get(`${hostname}/getAssessmentFlag/`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});



// Get the assessment link given prof_id
export const getAssessmentLinkByProfId = (profId) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append('prof_id', profId);

    params.append()
    var request = {
        params: params
    };
    axios.get(`${hostname}/getAssessmentLink/`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});



// Set the assessment link given class_id and prof_id
export const setAssessmentLinkByClassId = (profId, link) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
        params.append('prof_id', profId);
        params.append('link', link);
    
        params.append()
        var request = {
            params: params
        };
    axios.post(`${hostname}/setAssessmentLink/`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});



// Set the assessment flag to published
export const setAssessmentFlagPublishedByProfId = (profId, flag) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append('prof_id', profId);
    params.append('assessment_flag', link);

    params.append()
    var request = {
        params: params
    };
    axios.post(`${hostname}/setFlagPublished/`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});



// Set the assessment flag to unpublished
export const setAssessmentFlagUnpublishedByProfId = (profId, flag) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append('prof_id', profId);
    params.append('assessment_flag', link);

    params.append()
    var request = {
        params: params
    };
    axios.post(`${hostname}/setFlagUnpublished/`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

