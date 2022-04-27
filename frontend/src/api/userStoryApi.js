import axios from 'axios';
import { hostname } from './repositoryConfig';

const apiConfig = {
    headers: {
        
    }
};

// Delete a User Story given its id
export const deleteUserStoryById = (userStoryId) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("story_id", userStoryId);
    params.append()
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


// Get all User Stories for a team given team_id
export const getUserStoriesById = (teamId) => new Promise((resolve, reject) => {
    var params = new URLSearchParams();
    params.append("team_id", teamId);
    params.append()
        var request = {
            params: params
        };
    axios.get(`${hostname}/searchUserStoryById/${teamId}`, apiConfig)
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
    axios.put(`${hostname}/setUserStoryStatus/${userStoryId}`, request, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});
