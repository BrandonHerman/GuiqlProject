import { ClickAwayListener } from "@material-ui/core";
import JSONCalls from "../assets/JSONCalls";

var InstructorProfile = (function () {
    var calls = new JSONCalls;
    var firstName = "";
    var lastName = "";
    var email = "";
    var password = "";
    var username = "";
    var students = [];

    var profID;
    var getEmail = function () {
        return email;
    }
    var setEmail = function (mail) {
        email = mail;
        console.log("set email to:");
        console.log(email);
    }

    var getUsername = function() {
        return username;
    }
    var setUsername = function(name) {
        username = name;
        console.log("set username to:");
        console.log(username);
    }
    //pulled from database in login function, set here
    var getName = function () {
        return firstName, lastName;
    }

    var setName = function (first, last) {
        firstName = first;
        lastName = last;
    }

    var getID = function() {
        return profID;
    }

    var setID = function(id) {
        profID = id;
    }

    var getPassword = function () {
        return password;
    }
    var setPassword = function (pass) {
        password = pass;
    }

    var setStudents = function(stud) {
      return calls.getStudentsByClassId(this.getID(), stud);
    }

    var getStudents = function() {
        return students;
    }
    return {
        getName: getName,
        setName: setName,
        getEmail: getEmail,
        setEmail: setEmail,
        getPassword: getPassword,
        setPassword: setPassword,
        getID: getID,
        setID: setID,
        getUsername: getUsername,
        setUsername: setUsername,
        setStudents: setStudents,
        getStudents: getStudents
    }
})();

export default InstructorProfile;