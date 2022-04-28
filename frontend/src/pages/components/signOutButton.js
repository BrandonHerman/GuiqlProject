import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import './createClassTable.css';


function SignOutButton() {

    return (
        <div>
            <Link to="/">
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2}}
                >
                    Sign Out
                </Button>
            </Link>
        </div>
    );
}

export default SignOutButton;