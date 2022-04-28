import * as React from 'react';
import testStuff from '../testStuff.json';

export class Repository {
    profSignIn(inUsername, inPassword){
        // FIND PROFESSOR GIVEN USERNAME
        for(let i = 0; i < json.profs.length; i++){
            if(json.profs[i].username === inUsername){
                if(json.profs[i].password === inPassword){
                    console.log("Successful Login");
                    // InstructorProfile.setEmail(prof[i].email);
                    // InstructorProfile.setName(prof[i].firstName, prof[i].lastName);
                    // InstructorProfile.setID(prof[i].id);
                    // InstructorProfile.setUsername(prof[i].username);
                    // InstructorProfile.setPassword(prof[i].password);
                    // navigate('/classeshome');
                    return;
                }
            }
        }
        return alert("Invalid username or password");
    }


}