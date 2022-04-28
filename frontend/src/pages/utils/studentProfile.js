var StudentProfile = (function () {
    var firstName = "";
    var lastName = "";
    var email = "";
    var username = "";
    var password = "";
    var studentID = -1;

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
    var getID = function() {
        return studentID;
    }
    var setID = function(id) {
        studentID = id;
    }
    
    //pulled from database in login function, set here
    var getfirstName = function () {
        return firstName;
    }

    var setfirstName = function (first) {
        firstName = first;
    }

    var setlastName = function(last) {
        lastName = last;
    }

    var getlastName = function() {
        return lastName;
    }

    var getPassword = function () {
        return password;
    }
    var setPassword = function (pass) {
        password = pass;
    }
    return {
        getfirstName: getfirstName,
        setfirstName: setfirstName,
        getlastName: getlastName,
        setlastName: setlastName,
        getEmail: getEmail,
        setEmail: setEmail,
        getPassword: getPassword,
        setPassword: setPassword,
        getUsername: getUsername,
        setUsername: setUsername,
        getID: getID,
        setID: setID
    }
})();

export default StudentProfile;