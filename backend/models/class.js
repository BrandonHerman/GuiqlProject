const knex = require('../database/knex');

const CLASS_TABLE = 'Class';

const createClass = async (class_name,class_day,class_time,size,group_count,prof_id,college_id) => {
    const query = await knex(CLASS_TABLE).insert({class_name,class_day,class_time,size,group_count,prof_id,college_id});
    const returnValue = await knex(CLASS_TABLE).select('Class.class_id','Class.class_day','Class.class_time','Class.prof_id','Class.college_id');
    return returnValue;
}

const searchByID = async (class_id) => {
    const query = await knex(CLASS_TABLE).where({class_id});
    const result = await query;
    return result;
}

const getClass = async (class_day,class_time,college_id) => {
    const query = await knex(CLASS_TABLE).where({class_day,class_time,college_id});
    const result = await query;
    return result;
}

const getStartTime = async (class_id) => {
    const query = await knex(CLASS_TABLE).select(start_time).where({class_id});
    const result = await query;
    return result;
}

const getEndTime = async (class_id) => {
    const query = await knex(CLASS_TABLE).select(end_time).where({class_id});
    const result = await query;
    return result;
}

const getProfessor = async (class_id) => {
    const query = await knex(CLASS_TABLE).select(prof_id).where({class_id});
    const result = await query;
    return result;
}

const getNumGroups = async (class_id) => {
    const query = await knex(CLASS_TABLE).select(group_count).where({class_id});
    const result = await query;
    return result;
}

const getAvgGroupSize = async (class_id) => {
    const query = await knex(CLASS_TABLE).select(avg_team_size).where({class_id});
    const result = await query;
    return result;
}

const addPeerReview = async (class_id,link) => {
    const query = await knex(CLASS_TABLE).where({class_id}).update({peer_review_link: link});
    const result = await query;
    return result;
}

const getPeerReview = async (class_id) => {
    const query = await knex(CLASS_TABLE).select(peer_review_link).where({class_id});
    const result = await query;
    return result;
}

const makePeerReviewVisible = async (class_id) => {
    const query = await knex(CLASS_TABLE).where({class_id}).update({show_peer_review: true});
    const result = await query;
    return result;
}

module.exports = {
    createClass,
    searchByID,
    getClass,
    getProfessor,
    getNumGroups,
    getAvgGroupSize,
    addPeerReview,
    getPeerReview,
    makePeerReviewVisible
}