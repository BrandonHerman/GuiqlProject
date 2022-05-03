const knex = require('../database/knex');

const PROGRESS_REPORT_TABLE = 'Progress_Report';

const createProgressReport = async (sprint,report,team_id) => {
    const query = await knex(PROGRESS_REPORT_TABLE).insert({sprint,report,team_id});
    const result = await query;
    return result;
}

const searchById = async (report_id) => {
    const query = await knex(PROGRESS_REPORT_TABLE).where({report_id});
    const result = await query;
    return result;
}

const searchByTeamId = async (team_id) => {
    const query = await knex(PROGRESS_REPORT_TABLE).where({team_id});
    const result = await query;
    return result;
}

const deleteReport = async (report_id) => {
    const query = await knex(PROGRESS_REPORT_TABLE).where({report_id}).del();
    const result = await query;
    return result;
}

module.exports = {
    createProgressReport,
    searchById,
    searchByTeamId,
    deleteReport
}