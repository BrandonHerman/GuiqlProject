import axios from 'axios';
import { hostname } from './repositoryConfig';




//USER STORY ROUTES

// Delete a User Story given its id
export const deleteUserStoryById = (userStoryId) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("story_id", userStoryId);
    params.append();
        var request = {
            params: params
        };
    axios.delete(`${hostname}/removeUserStory/${userStoryId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});


// Add a User Story given its title, description, and team_id
export const addUserStory = (title, description, team_id) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("title", title);
    params.append("description", description);
    params.append("team_id", team_id);
    params.append()
        var request = {
            params: params
        };
    axios.post(`${hostname}/createUserStory`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});
  
// I need to get the students based on their university
export const getStudentByUniversity = (university) => new Promise((resolve, reject) => {
    axios.get(`${hostname}/${university}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Get all User Stories for a team given team_id
export const getUserStoriesById = (teamId) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("team_id", teamId);
    params.append()
        var request = {
            params: params
        };
    axios.get(`${hostname}/getUserStoriesById/${teamId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});
  
// Create a new student given class_id, first_name, last_name, and email
export const createStudent = (class_id, first_name, last_name, email) => new Promise((resolve, reject) => {
    axios.post(`${hostname}/create`, {class_id, first_name, last_name, email}, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Update a User Story given userStoryId and status
export const updateUserStoryById = (userStoryId, status) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("status", status);
    var request = {
        params: params
    };
    axios.put(`${hostname}/${userStoryId}`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});
  
// Get all the students in a class given class_id
export const getStudents = (class_id) => new Promise((resolve, reject) => {
    axios.get(`${hostname}/${class_id}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});




//MEETING ROUTES

// Get all Meetings for a team given team_id
export const getMeetingsByTeamId = (teamId) => new Promise((resolve, reject) => {
    axios.get(`${hostname}/${teamId}`, apiConfig)
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




//PROGRESS REPORT ROUTES

// Get progress reports based on a team_id
export const getProgressReportsByTeamId = (teamId) => new Promise((resolve, reject) => {
    axios.get(`${progressReportBaseURL}/${teamId}`, apiConfig)
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
    axios.post(`${progressReportBaseURL}`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

// Delete progress reports based on progress_report_id
export const deleteProgressReportById = (progressReportId) => new Promise((resolve, reject) => {
    axios.delete(`${progressReportBaseURL}/${progressReportId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});




//ASSESSMENT ROUTES

// Get the state of the assessment flag based on team_id and prof_if
export const getAssessmentFlagByTeamId = (teamId, profId) => new Promise((resolve, reject) => {
    axios.get(`${assessmentFlagBaseURL}/${teamId}/${profId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});



// Get the assessment link given team_id and prof_id
export const getAssessmentLinkByTeamId = (teamId, profId) => new Promise((resolve, reject) => {
    axios.get(`${assessmentLinkBaseURL}/${teamId}/${profId}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});
