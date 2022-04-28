const knex = require('../database/knex');

const TEAM_TABLE = 'Team';

const createTeam = async (team_name,team_num) => {
    const query = await knex(TEAM_TABLE).insert({team_name,team_num});
    const returnValue = await knex(TEAM_TABLE).select('Team.team_id','Team.team_name','Team.team_num');
    return returnValue;
}

const searchByID = async (team_id) => {
    const query = await knex(TEAM_TABLE).where({team_id});
    const result = await query;
    return result;
}

const searchByName = async (team_name) => {
    const query = await knex(TEAM_TABLE).where({team_name});
    const result = await query;
    return result;
}

const setTeamSize = async (team_id,num) => {
    const query = await knex(TEAM_TABLE).where({team_id}).update({team_size: num});
    const result = await query;
    return result;
}

const getTeamSize = async (team_id) => {
    const query = await knex(TEAM_TABLE).select(team_size).where({team_id});
    const result = await query;
    return result;
}

const setTeamName = async (team_id,name) => {
    const query = await knex(TEAM_TABLE).where({team_id}).update({team_name: name});
    const result = await query;
    return result;
}
const getTeamName = async (team_id) => {
    const query = await knex(TEAM_TABLE).select(team_name).where({team_id});
    const result = await query;
    return result;
}

const deleteTeam = async (team_id) => {
    const query = await knex(TEAM_TABLE).where({team_id}).del();
    const result = await query;
    return result;
}

module.exports = {
    createTeam,
    searchByID,
    searchByName,
    setTeamSize,
    getTeamSize,
    setTeamName,
    getTeamName,
    deleteTeam
}