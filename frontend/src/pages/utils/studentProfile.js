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
    var getName = function () {
        return firstName, lastName;
    }

    var setName = function (first, last) {
        firstName = first;
        lastName = last;
    }

    var getPassword = function () {
        return password;
    }
    var setPassword = function (pass) {
        password = pass;
    }
    return {
        getName: getName,
        setName: setName,
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