const knex = require('../database/knex');

const ASSESSMENT_TABLE = 'Assessment';

const createAssessment = async (assessment_link,prof_id,team_id) => {
    const query = await knex(ASSESSMENT_TABLE).insert({assessment_link,assessment_flag: false,prof_id,team_id});
    const result = await query;
    return result;
}

const searchByLink = async (assessment_link) => {
    const query = await knex(ASSESSMENT_TABLE).where({assessment_link});
    const result = await query;
    return result;
}

const getAssessmentLink = async (assessment_id) => {
    const query = await knex(ASSESSMENT_TABLE).select('assessment_link').where({assessment_id});
    const result = await query;
    return result;
}

const setAssessmentLink = async (assessment_id,assessment_link) => {
    const query = await knex(ASSESSMENT_TABLE).where({assessment_id}).update('assessment_link', assessment_link);
    const result = await query;
    return result;
}

const getAssessmentFlag = async (assessment_id) => {
    const query = await knex(ASSESSMENT_TABLE).where({assessment_id});
    const result = await query;
    return result;
}

const getFlagByProfId = async (prof_id) => {
    const query = await knex(ASSESSMENT_TABLE).select('assessment_flag').where({prof_id});
    const result = await query;
    return result;
}

const getLinkByProfId = async (prof_id) => {
    const query = await knex(ASSESSMENT_TABLE).select('assessment_link').where({prof_id});
    const result = await query;
    return result;
}

const setFlagPublished = async (prof_id) => {
    const query = await knex(ASSESSMENT_TABLE).where({prof_id}).update({assessment_flag: true});
    const result = await query;
    return result;
}

const setFlagUnpublished = async (prof_id) => {
    const query = await knex(ASSESSMENT_TABLE).where({prof_id}).update({assessment_flag: false});
    const result = await query;
    return result;
}

module.exports = {
    createAssessment,
    searchByLink,
    getAssessmentLink,
    setAssessmentLink,
    getAssessmentFlag,
    getFlagByProfId,
    getLinkByProfId,
    setFlagPublished,
    setFlagUnpublished
}