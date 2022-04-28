import * as React from 'react';
import testStuff from '../../testStuff.json';

const json = JSON.parse(JSON.stringify(testStuff));

export class JSONCalls{

    profSignIn(inUsername, inPassword){

        console.log(inPassword, inUsername);
        // FIND PROFESSOR GIVEN USERNAME
        for(let i = 0; i < json.profs.length; i++){
            if(json.profs[i].username === inUsername){
                if(json.profs[i].password === inPassword){
                    console.log("Successful Login");
                    return json.profs[i];
                }
            }
        }
        return null;
    }

}
