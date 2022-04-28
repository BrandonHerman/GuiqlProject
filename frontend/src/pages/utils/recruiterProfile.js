var RecruiterProfile = (function () {
    var firstName = "";
    var lastName = "";
    var email = "";
    var password = "";
    var username = "";
    var recruiterID = -1;

    var bio = "";
    var image = "";
    var uni = "";
    var config;


    var getUni = function() {
        return uni;
    }
    var setUni = function(input) {
        uni = input;
    }
    var getImage = function() {
        return image;
    }
    var setImage = function(url) {
        image = url;
    }
    var setBio = function(b) {
        bio = b;
    }
    var getBio = function() {
        return bio;
    }
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
        return recruiterID;
    }

    var setID = function(id) {
        recruiterID = id;
    }


    var getPassword = function () {
        return password;
    }
    var setPassword = function (pass) {
        password = pass;
    }

    var getConfig = function() {
        return config;
    }

    var setConfig = function(c) {
        config = c;
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
        setBio: setBio,
        getBio: getBio,
        setImage: setImage,
        getImage: getImage,
        getUni: getUni,
        setUni: setUni,
        getConfig: getConfig,
        setConfig: setConfig
    }
})();

export default RecruiterProfile;