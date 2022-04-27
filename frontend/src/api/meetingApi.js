import axios from 'axios';
import { hostname } from './repositoryConfig';



// Get all Meetings for a team given team_id
export const getMeetingsByTeamId = (teamId) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("team_id", teamId);
    params.append()
        var request = {
            params: params
        };
    axios.get(`${hostname}/getMeetingsByTeamId/${teamId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Create a Meeting given its date and meeting place
export const addMeeting = (date, place, teamId) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("date", date);
    params.append("place", place);
    params.append("team_id", teamId);
    var request = {
        params: params
    };
    axios.post(`${hostname}/createMeeting`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Delete a Meeting given its id
export const deleteMeetingById = (meetingId) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("meeting_id", meetingId);
    params.append()
        var request = {
            params: params
        };

    axios.delete(`${hostname}/deleteMeetingById/${meetingId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Update a Meeting given meetingId and status
export const updateMeetingById = (meetingId, status) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("meeting_id", meetingId);
    params.append("status", status);
    var request = {
        params: params
    };
    axios.put(`${hostname}/updateMeetingById/${meetingId}`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});