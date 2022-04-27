var RecruiterProfile = (function () {
    var firstName = "";
    var lastName = "";
    var email = "";
    var password = "";
    var username = "";

    var getEmail = function () {
        return email;
    }
    var setEmail = function (mail) {
        email = mail;
        console.log("set email to:");
        console.log(email);
    }
    //pulled from database in login function, set here
    var getUsername = function() {
        return username;
    }
    var setUsername = function(name) {
        username = name;
        console.log("set username to:");
        console.log(username);
    }
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
        setUsername: setUsername
    }
})();

export default RecruiterProfile;