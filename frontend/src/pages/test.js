import * as React from 'react';
import testStuff from '../testStuff.json';
import testStuff2 from '../testStuff2.json';


function Test() {
    const fs = require('fs');
    //var json = fs.readFileSync(testStuff2);
    //var myObject= JSON.parse(json);

    var json = JSON.parse(testStuff2);
    json.profs[0].classes[0].students.push({
        "firstName": "Grantham",
        "lastName": "BingBong",
        "username": "GBingBong",
        "password": "dummy",
        "email": "GBingBong@smu.edu",
        "inTeam": true,
        "teamID": 3
    });
    var obj = JSON.stringify(json);
    fs.writeFileSync(testStuff2, obj);



    //console.log(newStudent);
    // Add the new student to the class 1
    //json.profs[0].classes[0].students.push(newStudent);

    // Print the full json file
    console.log(json);



    //fs.writeFile("testStuff2.json", JSON.stringify(json))
    // console.log()

    
    
    
    //console.log(file.profs.firstName);

    // var classes = prof.classes;
    // console.log(classes);

    return (
        <div>
            <h1>Test</h1>
            {/*<button onClick={getStudentsByProfClassTeamId(1, 2, 2)}>Get Prof</button>*/}
        </div>
     );
}



export default Test;
