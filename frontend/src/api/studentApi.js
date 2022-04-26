import axios from 'axios';


//const stuBaseURL = 'https://api.guiql.com/student';
//const userStoriesBaseURL = 'https://api.guiql.com/userstories';




//USER STORY ROUTES

// Delete a User Story given its id
export const deleteUserStoryById = (userStoryId) => new Promise((resolve, reject) => {
    axios.delete(`${userStoriesBaseURL}/${userStoryId}`, apiConfig)
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
    axios.post(`${userStoriesBaseURL}`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});


// Get all User Stories for a team given team_id
export const getUserStoiesById = (teamId) => new Promise((resolve, reject) => {
    axios.get(`${userStoriesBaseURL}/${teamId}`, apiConfig)
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
    axios.put(`${userStoriesBaseURL}/${userStoryId}`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});




//MEETING ROUTES

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
