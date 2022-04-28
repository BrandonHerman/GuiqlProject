const knex = require('../database/knex');

const COLLEGE_TABLE = 'College';

const createCollege = async (college_id,name) => {
    //check if college already exists
    const id = await searchByID(college_id);

    if(college_id) {
        return "College already exists";
    } else {
        const query = await knex(COLLEGE_TABLE).insert({college_id,name});
        const returnValue = await knex(COLLEGE_TABLE).select('College.college_id','College.name');
        return returnValue;
    }
}

const searchByID = async (college_id) => {
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
    const query = await knex(COLLEGE_TABLE).select(name).where({college_id});
    const result = await query;
    return result;
}

const getID = async (name) => {
    const query = await knex(COLLEGE_TABLE).select(college_id).where({name});
    const result = await query;
    return result;
}

module.exports = {
    createCollege,
    searchByID,
    searchByName,
    getName,
<<<<<<< Updated upstream
    getID
=======
    getID,
    getCollegeByProfID
}
>>>>>>> Stashed changes
}