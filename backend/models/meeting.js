const knex = require('../database/knex');

const MEETING_TABLE = 'Meeting';

const createMeeting = async (meeting_id,meeting_time,meeting_place,team_id) => {
    //check if team already exists
    const id = await searchByID(meeting_id);

    if(id) {
        return "Meeting already created";
    } else {
        const query = await knex(MEETING_TABLE).insert({meeting_id,meeting_time,meeting_place,team_id});
        const returnValue = await knex(MEETING_TABLE).select('Meeting.meeting_id','Meeting.meeting_time','Meeting.meeting_place','Meeting.team_id');
        return returnValue;
    }
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

module.exports = {
    createMeeting,
    setTime,
    setPlace
}