import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import './createClassTable.css';
import InstructorProfile from "../utils/instructorProfile";
import StudentProfile from "../utils/studentProfile";
import RecruiterProfile from "../utils/recruiterProfile";

function SignOutButton() {

    

    return (
        <div>
            <Link to="/">
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => {
                        console.log("Clearing Session States");
                        InstructorProfile.setEmail("");
                        InstructorProfile.setName("", "");
                        InstructorProfile.setID(0);
                        InstructorProfile.setUsername("");
                        InstructorProfile.setPassword("");
                        StudentProfile.setEmail("");
                        StudentProfile.setfirstName("");
                        StudentProfile.setlastName("");
                        StudentProfile.setID(0);
                        StudentProfile.setUsername("");
                        StudentProfile.setPassword("");
                        RecruiterProfile.setEmail("");
                        RecruiterProfile.setfirstName("");
                        RecruiterProfile.setlastName("");
                        RecruiterProfile.setID(0);
                        RecruiterProfile.setUsername("");
                        RecruiterProfile.setPassword("");
                        console.log("Instructor Username:");
                        console.log(InstructorProfile.getUsername);
                    }}

            

                >
                    Sign Out
                </Button>
            </Link>
        </div>
    );
}

export default SignOutButton