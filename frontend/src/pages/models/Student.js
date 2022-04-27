export class Student {
    constructor(id, username, first_name, last_name, email, in_team = false, year = null, team_id = null, prof_id = null, class_id = null, college_id = null) {
        this.id = id;
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.in_team = in_team;
        this.year = year;
        this.team_id = team_id;
        this.prof_id = prof_id;
        this.class_id = class_id;
        this.college_id = college_id;
    }
}