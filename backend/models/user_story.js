const knex = require('../database/knex');

const STORY_TABLE = 'User_story';

const createUserStory = async (story_id,title,description) => {
    //check if team already exists
    const id = await searchByID(team_id);

    if(id) {
        return "Team already exists";
    } else {
        const query = await knex(STORY_TABLE).insert({story_id,status:false,title,description,favorite:false});
        const returnValue = await knex(STORY_TABLE).select('User_story.story_id','User_story.title','User_story.description');
        return returnValue;
    }
}

const searchByID = async (story_id) => {
    const query = await knex(STORY_TABLE).where({story_id});
    const result = await query;
    return query;
}

const searchByTitle = async (title) => {
    const query = await knex(STORY_TABLE).where({title});
    const result = await query;
    return result;
}

const setStatus = async (story_id,stat) => {
    const query = await knex(STORY_TABLE).where({story_id}).update({status: stat});
    const result = await query;
    return result;
}

const setAsFavorite = async (story_id) => {
    const query = await knex(STORY_TABLE).where({story_id}).update({favorite: true});
    const result = await query;
    return result;
}

const unfavorite = async (story_id) => {
    const query = await knex(STORY_TABLE).where({story_id}).update({favorite: false});
    const result = await query;
    return result;
}

const addDescription = async (story_id,descp) => {
    const query = await knex(STORY_TABLE).where({story_id}).update({description: descp});
    const result = await query;
    return result;
}

module.exports = {
    createUserStory,
    searchByID,
    searchByTitle,
    setStatus,
    setAsFavorite,
    unfavorite,
    addDescription
}