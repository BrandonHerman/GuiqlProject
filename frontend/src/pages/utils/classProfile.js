var ClassProfile = (function () {
    var time = "";
    var size = 0;
    var groups = 0;
    var profID = "";
    var students = [];

    var getStudents = function() {
        return students;
    }

    var addStudents = function(student) {
        students.push(student);
    }

    var getTime = () => {
        return time;
    }
    var setTime = (t) => {
        time = t;
    }
    
    var getSize = () => {
        return size;
    }

    var setSize = (int) => {
        size = int
    }

    var getGroups = () => {
        return groups;
    }

    var setGroups = num => {
        groups = num;
    }

    var getprofID = () => {
        return profID;
    }

    var setprofID = (id) => {
        profID = id;
    }
    return {
        setTime: setTime,
        getTime: getTime,
        getSize: getSize,
        setSize: setSize,
        getprofID: getprofID,
        setprofID: setprofID,
        getGroups: getGroups,
        setGroups: setGroups,
        getGroups: getGroups

    }
})();

export default ClassProfile;