const knex = require('../database/knex');
const bcrypt = require('bcrypt');
const e = require('express');

const RECRUITER_TABLE = 'Recruiter';

const createRecruiter = async (recruiter_id, first_name, last_name, username, password) => {
    // check if professor already exists
    const id = await searchByID(recruiter_id);
    const userName = await searchByUsername(username);
    const eMail = await searchByEmail(email);

    if (id) {
        return "Professor has already been added";
    } else if (userName) {
        return "Username taken!";
    } else if (eMail) {
        return "Email already associated with another account!";
    } else {  //if professor does not already exist, add their info to the table
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const query = await knex(RECRUITER_TABLE).insert({recruiter_id,first_name,last_name,email,username,password: hashedPassword,salt});
        const returnValue = await knex(RECRUITER_TABLE).select('Recruiter.recruiter_id','Recruiter.first_name','Recruiter.last_name','Recruiter.email','Recruiter.username');
        return returnValue;
    }
}

const authenticate = async (username,password) => {
    const validUsername = await searchByUsername(username);

    // check if username exists
    if (validUsername == false) {
        return "Username does not exist!";
    } else {
        // check if password is correct
        const validPassword = await findUserByPassword(username,password);
         if (validPassword.length !== 0) {;
            const query = await knex(RECRUITER_TABLE).where({username,password: validPassword[0].password});
            return query;
        } else {
            return "Password is incorrect!";
        }
    }
}

const addBio = async (recruiter_id,rec_bio) => {
    const query = await knex(RECRUITER_TABLE).where({recruiter_id}).update({bio: rec_bio});
    const result = await query;
    return result;
}

const getBioByID = async (recruiter_id) => {
    const query = await knex(RECRUITER_TABLE).select(bio).where({recruiter_id});
    const result = await query;
    return result;
}

const getBioByCollge = async (college_id) => {
    const query = await knex(RECRUITER_TABLE).select(bio).where({college_id});
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
    addBio,
    getBioByID,
    getBioByCollge,
    deleteRecruiter
}