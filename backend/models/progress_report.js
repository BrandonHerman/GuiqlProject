const knex = require('../database/knex');

const PROGRESS_REPORT_TABLE = 'Progress_Report';

const createProgressReport = async (report_id,sprint,report,team_id) => {
    //check if report already exists
    const id = await searchByID(report_id);

    if(id) {
        return "Report already exists";
    } else {
        const query = await knex(PROGRESS_REPORT_TABLE).insert({report_id,sprint,report,team_id});
        const returnValue = await knex(PROGRESS_REPORT_TABLE).select('Progress_Report.report_id','Progress_Report.sprint','Progress_Report.report','Progress_Report.team_id');
        return returnValue;
    }
}

const searchByID = async (report_id) => {
    const query = await knex(PROGRESS_REPORT_TABLE).where({report_id});
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
    searchByID,
    deleteReport
}