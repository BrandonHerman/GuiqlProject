const knex = require('../database/knex');
//const bcrypt = require('bcrypt');
const e = require('express');

const PROFESSOR_TABLE = 'Professor';

const createProfessor = async (first_name,last_name,username,email,password,college_id) => {
    //const salt = await bcrypt.genSalt(10);
    //const hashedPassword = await bcrypt.hash(password,salt);
    const hashedPassword = password;
    const query = await knex(PROFESSOR_TABLE).insert({first_name,last_name,email,username,password: hashedPassword,college_id});
    const result = await query;
    return result;
}

const authenticate = async (username,password) => {
    const validUsername = await searchByUsername(username);

    // check if username exists
    if (validUsername == false) {
        return "Username does not exist!";
    } else {
        // check if password is correct
        const saltH = await knex(PROFESSOR_TABLE).select('salt').where({username});
        //const passwdHash = await bcrypt.hash(password,saltH);
        passwdHash = password;
        const validPassword = await findUserByPassword(username,passwdHash);
         if (validPassword.length !== 0) {;
            const query = await knex(PROFESSOR_TABLE).where({username,password: validPassword[0].password});
            return query;
        } else {
            return "Password is incorrect!";
        }
    }
}

const findByUsername = async (username) => {
    const query = await knex(PROFESSOR_TABLE).where({username});
    
    if (query.length === 0) {
        return false;
    } else {
        return query;
    }
}

const findByEmail = async (email) => {
    const query = await knex(PROFESSOR_TABLE).where({email});

    if (query.length === 0) {
        return false;
    } else {
        return query;
    }
}

const searchById = async (prof_id) => {
    const query = await knex(PROFESSOR_TABLE).where({ prof_id });
    const result = await query;
    return result;
}

const searchByUsername = async (username) => {
    const query = await knex(PROFESSOR_TABLE).where({ username });
    const result = await query;
    return result;
}

const searchByEmail = async (email) => {
    const query = await knex(PROFESSOR_TABLE).where({ email });
    const result = await query;
    return result;
}

const searchByCollege = async (college_id) => {
    const query = await knex(PROFESSOR_TABLE).where({college_id});
    const result = await query;
    return result;
}

const getProfessorName = async (prof_id) => {
    const query = await knex(PROFESSOR_TABLE).select('first_name','last_name').where({prof_id});
    const result = await query;
    return result;
}

const getCollegeIdByProfId = async (prof_id) => {
    const query = await knex(PROFESSOR_TABLE).select('college_id').where({prof_id});
    const result = await query;
    return result;
}

const getCollegeByProfId = async (prof_id) => {
    const query = await knex(PROFESSOR_TABLE).where({prof_id});
    const result = await query;
    return result;
}

const removeProfessor = async (prof_id) => {
    const query = await knex(PROFESSOR_TABLE).where({prof_id}).del();
    const result = await query;
    return result; 
}

module.exports = {
    createProfessor,
    authenticate,
    findByUsername,
    findByEmail,
    searchById,
    searchByEmail,
    searchByUsername,
    searchByCollege,
    getProfessorName,
    getCollegeIdByProfId,
    getCollegeByProfId,
    removeProfessor
}