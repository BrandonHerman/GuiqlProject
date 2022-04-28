const knex = require('../database/knex');

const COLLEGE_TABLE = 'College';

const createCollege = async (name) => {
    const query = await knex(COLLEGE_TABLE).insert({name});
    const returnValue = await knex(COLLEGE_TABLE).select('College.college_id','College.name');
    return returnValue;
}

const searchById = async (college_id) => {
    const query = await knex(COLLEGE_TABLE).where({college_id});
    const result = await query;
    return result;
}

const searchByName = async (name) => {
    const query = await knex(COLLEGE_TABLE).where({name});
    const result = await query;
    return result;
}

const getName = async (college_id) => {
    const query = await knex(COLLEGE_TABLE).select('name').where({college_id});
    const result = await query;
    return result;
}

const getId = async (name) => {
    const query = await knex(COLLEGE_TABLE).select('college_id').where({name});
    const result = await query;
    return result;
}

const getCollegeByProfId = async (prof_id) => {
    const query = await knex(COLLEGE_TABLE).where({prof_id});
    const result = await query;
    return result;
}

module.exports = {
    createCollege,
    searchById,
    searchByName,
    getName,
    getId,
    getCollegeByProfId
}