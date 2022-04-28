const knex = require('../database/knex');

const ASSESSMENT_TABLE = 'Assessment';

const createAssessment = async (assessment_id,assessment_link,prof_id,team_id) => {
    //check if team already exists
    const link = await searchByLink(assessment_link);

    if(link) {
        return "Assessment already exists";
    } else {
        const query = await knex(ASESSMENT_TABLE).insert({assessment_id,assessment_link,assessment_flag: false,prof_id,team_id});
        const returnValue = await knex(ASSESSMENT_TABLE).select('Assessment.assessment_id','Assessment.assessment_link','Assessment.prof_id','Assessment.team_id');
        return returnValue;
    }
}

const searchByLink = async (assessment_link) => {
    const query = await knex(ASSESSMENT_TABLE).where({assessment_link});
    const result = await query;
    return result;
}

const getAssessmentLink = async (assessment_id) => {
    const query = await knex(ASSESSMENT_TABLE).select(assessment_link).where({assessment_id});
    const result = await query;
    return result;
}

const setAssessmentLink = async (assessment_id,link) => {
    const query = await knex(ASSESSMENT_TABLE).where({assessment_id}).update({assessment_link: link});
    const result = await query;
    return result;
}

const getAssessmentFlag = async (assessment_id) => {
    const query = await knex(ASSESSMENT_TABLE).where({assessment_id});
    const result = await query;
    return result;
}

const getFlagByProfID = async (prof_id) => {
    const query = await knex(ASSESSMENT_TABLE).select(assessment_flag).where({prof_id});
    const result = await query;
    return result;
}

const getLinkByProfID = async (prof_id) => {
    const query = await knex(ASSESSMENT_TABLE).select(assessment_link).where({prof_id});
    const result = await query;
    return result;
}

const getLinkByClassID = async (class_id) => {
    const query = await knex(ASSESSMENT_TABLE).select(assessment_link).where({class_id});
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
    getFlagByProfID,
    getLinkByProfID,
    getLinkByClassID,
    setFlagPublished,
    setFlagUnpublished
}