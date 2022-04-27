import axios from 'axios';
import { hostname } from './repositoryConfig';



// Get all Meetings for a team given team_id
export const getMeetingsByTeamId = (teamId) => new Promise((resolve, reject) => {
    axios.get(`${meetingBaseURL}/${teamId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Create a Meeting given its date and meeting place
export const addMeeting = (date, place) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("date", date);
    params.append("place", place);
    var request = {
        params: params
    };
    axios.post(`${meetingBaseURL}`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Delete a Meeting given its id
export const deleteMeetingById = (meetingId) => new Promise((resolve, reject) => {
    axios.delete(`${meetingBaseURL}/${meetingId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Update a Meeting given meetingId and status
export const updateMeetingById = (meetingId, status) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("status", status);
    var request = {
        params: params
    };
    axios.put(`${meetingBaseURL}/${meetingId}`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});