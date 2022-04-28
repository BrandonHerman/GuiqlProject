const knex = require('../database/knex');

const STORY_TABLE = 'User_story';

const createUserStory = async (title,description) => {
    const query = await knex(STORY_TABLE).insert({status:false,title,description,favorite:false});
    const returnValue = await knex(STORY_TABLE).select('User_story.story_id','User_story.title','User_story.description');
    return returnValue;
}

const searchById = async (story_id) => {
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

const setDescription = async (story_id,descp) => {
    const query = await knex(STORY_TABLE).where({story_id}).update({description: descp});
    const result = await query;
    return result;
}

const setTitle = async (story_id, title) => {
    const query = await knex(STORY_TABLE).where({story_id}).update({title: this.title});
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