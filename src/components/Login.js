import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className="home-page-button">
            <Link to="/projects">
                <Button variant="primary">
                    Connect To JIRA Project Board
                </Button>
            </Link>
        </div>
    )
}

export default Login