const knex = require('../database/knex');

const COLLEGE_TABLE = 'College';

const createCollege = async (name) => {
    const query = await knex(COLLEGE_TABLE).insert({name});
    const result = await query;
    return query;
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

module.exports = {
    createCollege,
    searchById,
    searchByName,
    getName,
    getId
}