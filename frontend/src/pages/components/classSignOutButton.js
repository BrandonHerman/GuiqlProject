import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import './createClassTable.css';



function ClassSignOutButton() {

    return (
        <div>
            <Link to="/classeshome">
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                   Bakc to Classes 
                </Button>
            </Link>
        </div>
    );
}

export default ClassSignOutButton;