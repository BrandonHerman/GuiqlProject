import axios from 'axios';
import { hostname } from './repositoryConfig';



// Get progress reports based on a team_id
export const getProgressReportsByTeamId = (teamId) => new Promise((resolve, reject) => {
    axios.get(`${hostname}/${teamId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Create progress reports based on team_id
export const createProgressReport = (teamId, progressReport) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("team_id", teamId);
    params.append("progress_report", progressReport);
    var request = {
        params: params
    };
    axios.post(`${hostname}`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Delete progress reports based on progress_report_id
export const deleteProgressReportById = (progressReportId) => new Promise((resolve, reject) => {
    axios.delete(`${hostname}/${progressReportId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});
