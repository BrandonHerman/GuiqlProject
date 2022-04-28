export class Team {
    constructor(team_id, team_name, team_num, team_size = 0, prof_id = null, class_id = null) {
        this.team_id = team_id;
        this.team_name = team_name;
        this.team_num = team_num;
        this.team_size = team_size;
        this.prof_id = prof_id;
        this.class_id = class_id;
    }
}