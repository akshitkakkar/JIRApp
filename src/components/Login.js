import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div>
            <Link to="/projects">
                <Button variant="primary">
                    Go To Projects
                </Button>
            </Link>
        </div>
    )
}

export default Login