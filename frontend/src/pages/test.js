import * as React from 'react';
import testStuff from '../testStuff.json';


function Test() {
    var json = JSON.parse(JSON.stringify(testStuff));
    console.log(json.profs[0].classes[1].students[0].firstName);
    console.log()

    
    
    function studentSignIn(inUsername, inPassword){
        // FIND STUDENT GIVEN USERNAME
        for(let i = 0; i < json.prof.length; i++){
            for(let x = 0; i < json.prof.classes.length; x++){
                for(let y = 0; i < json.prof.classes.students.length; y++){
                    if(json.prof.classes.students[y].username === inUsername){
                        if(json.prof.classes.students[y].password === inPassword){
                            console.log("Successful Login");
                            // StudentProfile.setEmail(prof[i].email);
                            // StudentProfile.setName(prof[i].firstName, prof[i].lastName);
                            // StudentProfile.setID(prof[i].id);
                            // StudentProfile.setUsername(prof[i].username);
                            // StudentProfile.setPassword(prof[i].password);
                            // navigate('/studenthome');
                            return;
                        }
                    }
                }
            }
        }
        return alert("Invalid username or password");
    }

    function getClassesByProfId(profId){
        // FIND CLASSES GIVEN PROF ID
        for(let i = 0; i < json.profs.length; i++){
            if(json.profs[i].id === profId){
                return json.profs[i].classes;
            }
        }
    }

    function getStudentsByClassId(classId){
        // FIND STUDENTS GIVEN CLASS ID
        for(let i = 0; i < json.profs.length; i++){
            for(let x = 0; i < json.profs[i].classes.length; x++){
                if(json.profs[i].classes[x].id === classId){
                    return json.profs[i].classes[x].students;
                }
            }
        }
    }

    function getMeetingByTeamId(teamId){
        // FIND MEETING GIVEN TEAM ID
        for(let i = 0; i < json.profs.length; i++){
            for(let x = 0; i < json.profs[i].classes.length; x++){
                for(let y = 0; i < json.profs[i].classes[x].teams.length; y++){
                    if(json.profs[i].classes[x].teams[y].teamID === teamId){
                        return json.profs[i].classes[x].teams[y].meeting;
                    }
                }
            }
        }
    }
    
    function getStudentsByTeamId(teamId){
        // FIND STUDENTS GIVEN TEAM ID
        for(let i = 0; i < json.profs.length; i++){
            for(let x = 0; i < json.profs[i].classes.length; x++){
                for(let y = 0; i < json.profs[i].classes[x].teams.length; y++){
                    if(json.profs[i].classes[x].teams[y].teamID === teamId){
                        return json.profs[i].classes[x].teams[y].students;
                    }
                }
            }
        }
    }


    
    
    
    //console.log(file.profs.firstName);

    // var classes = prof.classes;
    // console.log(classes);

    // return (
        // <div>
            {/* <h1>Test</h1> */}
            {/* <button onClick={profSignIn("mfontenot", "datastruct")}>Get Prof</button> */}
        // </div>
    // );
}



export default Test;
