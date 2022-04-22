const knex = require('../database/knex');

const CLASS_TABLE = 'Class';

const createClass = async (class_id,start_time,end_time,prof_id) => {
    //check if class already exists
    const id = await searchByID(class_id);

    if (id) {
        return "Class already exists";
    } else {
        const query = await knex(CLASS_TABLE).insert({class_id,start_time,end_time,prof_id});
        const returnValue = await knex(CLASS_TABLE).select('Class.class_id','Class.start_time','Class.end_time','Class.prof_id');
        return returnValue;
    }
}

const searchByID = async (class_id) => {
    const query = await knex(CLASS_TABLE).where({class_id});
    const result = await query;
    return result;
}

module.exports = {
    createClass,
    searchByID
}