import axios from 'axios';


export class Repository {
    url = "http://localhost:8000";
    config = {
        headers: {
        }
    };

    //ASSESSMENT API CALLS

    // Get the state of the assessment flag based on team_id and prof_if
    getAssessmentFlagByProfId(profId){
        console.log("Getting assessment flag for prof_id: " + profId);
        return new Promise((resolve, reject) => {
        axios.get(`${this.url}/getAssessmentFlag?prof_id=${profId}`)
            .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x.data);
                reject(x.data);
            });
        })
    }

    // Get the assessment link given prof_id
    getAssessmentLinkByProfId(profId){
        console.log("Getting assessment link for prof_id: " + profId);
        return new Promise((resolve, reject) => {
        axios.get(`${this.url}/getAssessmentLink?prof_id=${profId}`)
            .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x.data);
                reject(x.data);
            });
        })
    }

    // Set the assessment link given class_id and prof_id
    setAssessmentLinkByClassId(profId, link){
        console.log("Setting assessment link for prof_id: " + profId);
        return new Promise((resolve, reject) => {
        axios.post(`${this.url}/setAssessmentLink?prof_id=${profId}&assessment_link=${link}`)
            .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x.data);
                reject(x.data);
            });
        })
    }

    // Set the assessment flag to published
    setAssessmentFlagPublishedByProfId(profId) {
        console.log("Setting assessment flag to published for prof_id: " + profId);
        return new Promise((resolve, reject) => {
        axios.post(`${this.url}/setFlagPublished?prof_id=${profId}`)
            .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x.data);
                reject(x.data);
            });
        })
    }

    // Set the assessment flag to unpublished
    setAssessmentFlagUnpublishedByProfId(profId) {
        console.log("Setting assessment flag to unpublished for prof_id: " + profId);
        return new Promise((resolve, reject) => {
        axios.post(`${this.url}/setFlagUnpublished?prof_id=${profId}`)
            .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x.data);
                reject(x.data);
            });
        })
    }



    //CLASS API CALLS

    // Create a class with the student information
    createClass(class_time, prof_id, size, college_id) {
        console.log("Creating class: " + class_name);
        var group_count = Math.ceil(size / 4);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/createClass?class_time=${class_time}&prof_id=${prof_id}&group_count=${group_count}&size=${size}&collge_id=${college_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Get the group count given instructor id and class id
    getGroupCountByClassId(class_id) {
        console.log("Getting group count for class_id: " + class_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getGroupCount?class_id=${class_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Get all the class_name, class_time, size, group_count using the prof id
    getClassesByProfId(prof_id) {
        console.log("Getting classes for prof_id: " + prof_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getClassesByProfId?prof_id=${prof_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }
            
    // Get the group count given instructor id and class id
    getClassByClassId(class_id) {
        console.log("Getting class for class_id: " + class_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getClass?class_id=${class_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Get the class id given the class time and college id
    getClassIdByClassTimeAndCollegeId(class_time, college_id) {
        console.log("Getting class id for class_time: " + class_time + " and college_id: " + college_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getClassIdByClassTimeAndCollegeId?class_time=${class_time}&college_id=${college_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }



    //COLLEGE API CALLS

    // Get University given prof id
    getUniversityByProfId(prof_id) {
        console.log("Getting university for prof_id: " + prof_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getUniversityByProfId?prof_id=${prof_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Create University given name
    createCollege(name) {
        console.log("Creating university: " + name);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/createCollege?name=${name}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Get College given name
    getCollegeByName(name) {
        console.log("Getting college for name: " + name);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getCollegeByName?name=${name}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Get CollegeId given prof_id
    getCollegeIdByProfId(prof_id) {
        console.log("Getting college_id for prof_id: " + prof_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getCollegeIdByProfId?prof_id=${prof_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }



    //INSTRUCTOR API CALLS

    // Get Instructor given username
    getInstructorByUsername(username) {
        console.log("Getting instructor for username: " + username);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getInstructorByUsername?username=${username}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }




    //MEETING API CALLS

    // Get all Meetings for a team given team_id
    getMeetingsByTeamId(team_id) {
        console.log("Getting meetings for team_id: " + team_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getMeetingsByTeamId?team_id=${team_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Create a Meeting given its date and meeting place
    createMeeting(meeting_time, meeting_place, team_id) {
        console.log("Creating meeting for team_id: " + team_id);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/createMeeting?meeting_time=${meeting_time}&meeting_place=${meeting_place}&team_id=${team_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }


    // Delete a Meeting given its id
    deleteMeeting(meeting_id) {
        console.log("Deleting meeting for meeting_id: " + meeting_id);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/deleteMeeting?meeting_id=${meeting_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Update a Meeting given meetingId and status
    updateMeeting(meeting_id, status) {
        console.log("Updating meeting for meeting_id: " + meeting_id);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/updateMeeting?meeting_id=${meeting_id}&status=${status}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }



    // PROFESSOR API CALLS

    // I need to get the professors based on their university
    getProfessorsByUniversity(university_id) {
        console.log("Getting professors for university_id: " + university_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getProfessorsByUniversity?university_id=${university_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // I need to create professors given a username, password, first name, last name, email, and college id
    createProfessor(first_name, last_name, username, password, email, college_id) {
        console.log("Creating professor for first_name: " + first_name + " and last_name: " + last_name);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/createProfessor?first_name=${first_name}&last_name=${last_name}&user_name=${username}&password=${password}&email=${email}&college_id=${college_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }


    // I need to get a professor given their prof_id
    searchProf(id) {
        console.log("finding Prof by " , id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/professor/searchProfessorByID?prof_id=${id}`) 
                .then(x => {
                    console.log(x.data);
                    resolve(x.data);
                    
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                })
        })

    } 



    // PROGRESS REPORT API CALLS

    // Get progress reports based on a team_id
    getProgressReportsByTeamId(team_id) {
        console.log("Getting progress reports for team_id: " + team_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getProgressReportsByTeamId?team_id=${team_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Create progress reports based on team_id, sprint, and progress report
    createProgressReport(team_id, sprint, progress_report) {
        console.log("Creating progress report for team_id: " + team_id);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/createProgressReport?team_id=${team_id}&sprint=${sprint}&progress_report=${progress_report}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Delete progress reports based on progress_report_id
    deleteProgressReport(progress_report_id) {
        console.log("Deleting progress report for progress_report_id: " + progress_report_id);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/deleteProgressReport?progress_report_id=${progress_report_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }



    // RECRUITER API CALLS

    // Create a new Recruiter using their first_name, last_name, username, and password
    createRecruiter(first_name, last_name, username, password) {
        console.log("Creating recruiter for username: " + username);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/createRecruiter?first_name=${first_name}&last_name=${last_name}&username=${username}&password=${password}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Get the Recruiter's bio based on their recruiterId
    getRecruiterBio(recruiterId) {
        console.log("Getting recruiter bio for recruiterId: " + recruiterId);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getRecruiterBio?recruiterId=${recruiterId}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // I need to get the Recruiter's bio based on their university
    getRecruiterBioByUniversity(university_id) {
        console.log("Getting recruiter bio for university_id: " + university_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getRecruiterBioByUniversity?university_id=${university_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // I need to set a recruiter's bio based on their recruiterId
    setRecruiterBio(recruiterId, bio) {
        console.log("Setting recruiter bio for recruiterId: " + recruiterId);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/setRecruiterBio?recruiterId=${recruiterId}&bio=${bio}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // I need to update the Recruiter's bio
    updateRecruiterBio(recruiterId, bio) {
        console.log("Updating recruiter bio for recruiterId: " + recruiterId);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/updateRecruiterBio?recruiterId=${recruiterId}&bio=${bio}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // I need to get the Recruiter object given their username
    getRecruiterByUsername(username) {
        console.log("Getting recruiter for username: " + username);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getRecruiterByUsername?username=${username}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }



    // STUDENT API CALLS

    // I need to get the students based on their college_id
    getStudentsByCollegeId(college_id) {
        console.log("Getting students for college_id: " + college_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getStudentsByCollegeId?college_id=${college_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Create a new student given class_id, first_name, last_name, and email
    createStudent(username, password, firstname, lastname, email, class_name, profID, class_id, collegeID) {
        console.log("Creating student for username: " + username);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/createStudent?username=${username}&password=${password}&first_name=${firstname}&last_name=${lastname}&email=${email}&class=${class_name}&prof_id=${profID}&class_id=${class_id}&college_id=${collegeID}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Get all the students in a class given class_id
    getStudentsByClassId(class_id) {
        console.log("Getting students for class_id: " + class_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getStudentsByClassId?class_id=${class_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Get Student given student_id
    getStudent(student_id) {
        console.log("Getting student for student_id: " + student_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getStudent?student_id=${student_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Get Student given username
    getStudentByUsername(username) {
        console.log("Getting student for username: " + username);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getStudentByUsername?username=${username}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }



    // TEAM API CALLS

    // Update a students team_id given student id and class id
    updateStudentTeam(student_id, class_id, team_id) {
        console.log("Updating student team for student_id: " + student_id);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/updateStudentTeam?student_id=${student_id}&class_id=${class_id}&team_id=${team_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }



    // USER STORY API CALLS

    // Get all User Stories for a team given team_id
    getUserStoriesByTeamId(team_id) {
        console.log("Getting user stories for team_id: " + team_id);
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/getUserStoriesByTeamId?team_id=${team_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Delete a User Story given its id
    deleteUserStory(user_story_id) {
        console.log("Deleting user story for user_story_id: " + user_story_id);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/deleteUserStory?user_story_id=${user_story_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Add a User Story given its title, description, and team_id
    createUserStory(title, description, team_id) {
        console.log("Creating user story for team_id: " + team_id);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/createUserStory?title=${title}&description=${description}&team_id=${team_id}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }

    // Update a User Story given userStoryId and status
    updateUserStory(userStory_id, status) {
        console.log("Updating user story for userStory_id: " + userStory_id);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/updateUserStory?userStory_id=${userStory_id}&status=${status}`)
                .then(x => {
                    resolve(x.data);
                })
                .catch(x => {
                    alert(x.data);
                    reject(x.data);
                });
        })
    }


}