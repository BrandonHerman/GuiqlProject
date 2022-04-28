import * as React from 'react';
import testStuff from '../testStuff.json';

var json = JSON.parse(JSON.stringify(testStuff));

export class Repository {
    profSignIn(inUsername, inPassword){
        for(let i = 0; i < json.profs.length; i++){
            if(json.profs[i].username === inUsername){
                if(json.profs[i].password === inPassword){
                    console.log("Successful Login");
                    return profs[i];
                }
            }
        }
        return null;
    }

    studentSignIn(inUsername, inPassword){
        for(let i = 0; i < json.profs.length; i++){
            for(let x = 0; i < json.profs[i].classes.length; x++){
                for(let y = 0; i < json.profs[i].classes[x].students.length; y++){
                    if(json.profs[i].classes[x].students[y].username === inUsername){
                        if(json.profs[i].classes[x].students[y].password === inPassword){
                            console.log("Successful Login");
                            return json.profs[i].classes[x].students[y];
                        }
                    }
                }
            }
        }
        return null;
    }

    getClassesByProfId(profId){
        for(let i = 0; i < json.profs.length; i++){
            if(json.profs[i].id === profId){
                console.log(json.profs[i].classes);
                return json.profs[i].classes;
            }
        }
        return null;
    }

    getStudentsByClassId(profId, classId){
        for(let i = 0; i < json.profs.length; i++){
            if(json.profs[i].id === profId){
                for(let x = 0; x < json.profs[i].classes.length; x++){
                    if(json.profs[i].classes[x].id === classId){
                        console.log(json.profs[i].classes[x].students);
                        return json.profs[i].classes[x].students;
                    }
                }
            }
        }
    }

    getMeetingByTeamId(profId, teamId){
        for(let i = 0; i < json.profs.length; i++){
            for(let x = 0; i < json.profs[i].classes.length; x++){
                for(let y = 0; i < json.profs[i].classes[x].teams.length; y++){
                    if(json.profs[i].classes[x].teams[y].teamID === teamId){
                        console.log(json.profs[i].classes[x].teams[y].meeting);
                        return json.profs[i].classes[x].teams[y].meeting;
                    }
                }
            }
        }
    }

    getStudentsByProfClassTeamId(profId, classId, teamId){
        var stuArray = [];
        for(let i = 0; i < json.profs.length; i++){
            if(json.profs[i].id === profId){
                for(let x = 0; x < json.profs[i].classes.length; x++){
                    if(json.profs[i].classes[x].id === classId){
                        for(let y = 0; y < json.profs[i].classes[x].students.length; y++){
                            if(json.profs[i].classes[x].students[y].teamID === teamId){
                                stuArray.push(json.profs[i].classes[x].students[y]);
                            }
                        }
                    }
                }
            }
        }
        console.log(stuArray);
        return stuArray;
    }
}