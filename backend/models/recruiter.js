const knex = require('../database/knex');
// const bcrypt = require('bcrypt');
const e = require('express');

const RECRUITER_TABLE = 'Recruiter';

const createRecruiter = async (first_name, last_name, username, password, email) => {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password,salt);
    const hashedPassword = password;
    const query = await knex(RECRUITER_TABLE).insert({recruiter_id,first_name,last_name,email,username,password: hashedPassword});
    const result = await query;
    return result;
}

const authenticate = async (username,password) => {
    const recruiters = await searchByUsername(username);

    // check if username exists
    if (validUsername.length === 0) {
        console.error(`No recruiters matched the username: ${username}`);
        return null;
    }
    // check if password is correct
    const recruiter = recruiters[0];
    const validPassword = await findUserByPassword(username,password);
    if (validPassword.length !== 0) {;
        delete recruiter.password;
        return recruiter;
    }
    return null;
}

const searchByUsername = async (username) => {
    const query = await knex(RECRUITER_TABLE).where({username});
    const result = await query;
    return result;
}

const findUserByPassword = async (username,password) => {
    const query = await knex(RECRUITER_TABLE).where({username,password});
    const result = await query;
    return result;
}

const addBio = async (recruiter_id,rec_bio) => {
    const query = await knex(RECRUITER_TABLE).where({recruiter_id}).update({bio: rec_bio});
    const result = await query;
    return result;
}

const getBioById = async (recruiter_id) => {
    const query = await knex(RECRUITER_TABLE).select('bio').where({recruiter_id});
    const result = await query;
    return result;
}

const getBioByCollege = async (college_id) => {
    const query = await knex(RECRUITER_TABLE).select('bio').where({college_id});
    const result = await query;
    return result;
}

const getByUsername = async (username) => {
    const query = await knex(RECRUITER_TABLE).where({username});
    const result = await query;
    return result;
}

const deleteRecruiter = async (recruiter_id) => {
    const query = await knex(RECRUITER_TABLE).where({recruiter_id}).del();
    const result = await query;
    return result;
}

module.exports = {
    createRecruiter,
    authenticate,
    searchByUsername,
    addBio,
    getBioById,
    getBioByCollege,
    getByUsername,
    deleteRecruiter
}