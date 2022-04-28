import * as React from 'react';
import testStuff from '../../testStuff.json';
import recruitJSON from '../../recruitJSON.json';

const json = JSON.parse(JSON.stringify(testStuff));
const recJson = JSON.parse(JSON.stringify(recruitJSON));

class JSONCalls {

    profSignIn(inUsername, inPassword) {

        console.log(inPassword, inUsername);
        // FIND PROFESSOR GIVEN USERNAME
        for (let i = 0; i < json.profs.length; i++) {
            if (json.profs[i].username === inUsername) {
                if (json.profs[i].password === inPassword) {
                    console.log("Successful Login");
                    return json.profs[i];
                }
            }
        }
        return 0;
    }


    studentSignIn(inUsername, inPassword) {
        // FIND STUDENT GIVEN USERNAME
        for (let i = 0; i < json.profs.length; i++) {
            for (let x = 0; i < json.profs[i].classes.length; x++) {
                for (let y = 0; i < json.profs[i].classes[x].students.length; y++) {
                    if (json.profs[i].username == inUsername) {
                        if (json.profs[i].classes[x].students[y].password == inPassword) {
                            console.log("Successful Login");
                            return json.profs[i].classes[x].students[y];
                        }
                    }
                }
            }
        }
        return 0;
    }

    recruitSignIn(inUsername, inPassword) {
        console.log(inPassword, inUsername);
        // FIND RECRUITER GIVEN USERNAME
        for (let i = 0; i < recJson.recruiter.length; i++) {
            if (recJson.recruiter[i].username === inUsername) {
                if (recJson.recruiter[i].password === inPassword) {
                    console.log("Successful Login");
                    return recJson.recruiter[i];
                }
            }
        }
        return 0;
    }

    getClassesByProfId(profId) {
        for (let i = 0; i < json.profs.length; i++) {
            if (json.profs[i].id === profId) {
                console.log(json.profs[i].classes);
                return json.profs[i].classes;
            }
        }
        return null;
    }

    getStudentsByClassId(profId, classId) {
        // FIND STUDENTS GIVEN CLASS ID and profId
        for (let i = 0; i < json.profs.length; i++) {
            if (json.profs[i].id === profId) {
                for (let x = 0; x < json.profs[i].classes.length; x++) {
                    if (json.profs[i].classes[x].id === classId) {
                        console.log(json.profs[i].classes[x].students);
                        return json.profs[i].classes[x].students;
                    }
                }
            }
        }

    }
    getProfbyUni(inUniversity) {
        var stud = [];
        for (let i = 0; i < json.profs.length; i++) {
            if (json.profs[i].university === inUniversity) {
                stud.push(json.profs[i]);
            }
        }

        return stud;
    }
    getStudentsByUniversity(inUniversity) {
        var stud = [];
        for (let i = 0; i < json.profs.length; i++) {
            for (let x = 0; x < json.profs[i].classes.length; x++) {
                for (let y = 0; y < json.profs[i].classes[x].students.length; y++) {
                    if (json.profs[i].classes[x].students[y].university == inUniversity) {
                        stud.push(json.profs[i].classes[x].students[y]);
                    }
                }
            }
            return stud;
        }
    }
}
export default JSONCalls;