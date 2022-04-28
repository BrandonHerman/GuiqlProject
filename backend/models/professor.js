const knex = require('../database/knex');
// const bcrypt = require('bcrypt');
const e = require('express');

const PROFESSOR_TABLE = 'Professor';

const createProfessor = async (prof_id,first_name,last_name,username,email,password) => {
    // check if professor already exists
    const id = await searchByID(prof_id);
    const userName = await searchByUsername(username);
    const eMail = await searchByEmail(email);

    if (id) {
        return "Professor has already been added";
    } else if (userName) {
        return "Username taken!";
    } else if (eMail) {
        return "Email already associated with another account!";
    } else {  //if professor does not already exist, add their info to the table
<<<<<<< Updated upstream
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password,salt);
=======


        const salt = await bcrypt.genSalt(10);
        //const hashedPassword = await bcrypt.hash(password,salt);
>>>>>>> Stashed changes
        const hashedPassword = password;
        const query = await knex(PROFESSOR_TABLE).insert({prof_id,first_name,last_name,email,username,password: hashedPassword,salt});
        const returnValue = await knex(PROFESSOR_TABLE).select('Pofessor.professor_id','Professor.first_name','Professor.last_name','Professor.email','Professor.username');
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
            const query = await knex(PROFESSOR_TABLE).where({username,password: validPassword[0].password});
            return query;
        } else {
            return "Password is incorrect!";
        }
    }
}

const searchByID = async (prof_id) => {
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

const getProfessorName = async (prof_id) => {
    const query = await knex(PROFESSOR_TABLE).select('first_name','last_name').where({prof_id});
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
    searchByID,
    searchByEmail,
    searchByUsername,
    getProfessorName,
    removeProfessor
}