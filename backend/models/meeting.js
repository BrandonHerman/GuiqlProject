const knex = require('../database/knex');

const MEETING_TABLE = 'Meeting';

const createMeeting = async (meeting_time,meeting_place,team_id) => {
    const query = await knex(MEETING_TABLE).insert({meeting_time,meeting_place,team_id});
    const returnValue = await knex(MEETING_TABLE).select('Meeting.meeting_id','Meeting.meeting_time','Meeting.meeting_place','Meeting.team_id');
    return returnValue;
}

const searchByTeam = async (team_id) => {
    const query = await knex(MEETING_TABLE).where({team_id});
    const result = await query;
    return result;
}

const setTime = async (meeting_id,time) => {
    const query = await knex(MEETING_TABLE).where({meeting_id}).update({meeting_time: time});
    const result = await query;
    return result;
}

const setPlace = async (meeting_id,place) => {
    const query = await knex(MEETING_TABLE).where({meeting_id}).update({meeting_place: place});
    const result = await query;
    return result;
}

const deleteMeeting = async (meeting_id) => {
    const query = await knex(MEETING_TABLE).where({meeting_id}).del();
    const result = await query;
    return result;
}

module.exports = {
    createMeeting,
    searchByTeam,
    setTime,
    setPlace,
    deleteMeeting
}