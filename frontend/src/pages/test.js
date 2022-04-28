import * as React from 'react';
import testStuff from '../testStuff.json';


function Test() {
    var json = JSON.parse(JSON.stringify(testStuff));
    // console.log(json.profs[0].classes[1].students[0].firstName);
    // console.log()

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
