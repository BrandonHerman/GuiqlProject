const knex = require('../database/knex');

const STORY_TABLE = 'User_story';

const createUserStory = async (title,description,student_id,team_id) => {
    const query = await knex(STORY_TABLE).insert({status:'to do',title,description,favorite:false,student_id,team_id});
    const result = await query;
    return result;
}

const searchById = async (story_id) => {
    const query = await knex(STORY_TABLE).where({story_id});
    const result = await query;
    return result;
}

const searchByTitle = async (title) => {
    const query = await knex(STORY_TABLE).where({title});
    const result = await query;
    return result;
}

const setStatus = async (story_id,status) => {
    const query = await knex(STORY_TABLE).where({story_id}).update('status', status);
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

const setDescription = async (story_id,description) => {
    const query = await knex(STORY_TABLE).where({story_id}).update('description', description);
    const result = await query;
    return result;
}

const setTitle = async (story_id, title) => {
    const query = await knex(STORY_TABLE).where({story_id}).update('title', title);
    const result = await query;
    return result;
}

const removeStory = async (story_id) => {
    const query = await knex(STORY_TABLE).where({story_id}).del();
    const result = await query;
    return result;
}

module.exports = {
    createUserStory,
    searchById,
    searchByTitle,
    setStatus,
    setAsFavorite,
    unfavorite,
    setDescription,
    setTitle,
    removeStory
}