import React, { useState } from "react";
import generator from "generate-password";
 
function StudentGeneration(first, last) {

    var generator = require('generate-password');
    var password = generator.generate({
        length: 10,
        numbers: true
    });
    console.log(password);
   var username = first[0] + last;

    console.log(username);
   return username, password;
}
 
export default StudentGeneration;