import * as React from 'react';
import testStuff from '../testStuff.json';

var json = JSON.parse(JSON.stringify(testStuff));

export class Repository {
    profSignIn(inUsername, inPassword){
        // FIND PROFESSOR GIVEN USERNAME
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
        // FIND STUDENT GIVEN USERNAME
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
        // FIND STUDENTS GIVEN CLASS ID and profId
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
}