import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {KEYS} from '../config/dev'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'


const Projects = () => {

    const [projects, setProjects] = useState({projectCollection: null})

    useEffect(() => {
        axios.get(`${KEYS.PROXY_DOMAIN}${KEYS.GET_JIRA_PROJECTS}?expand=lead`)
        .then((res) => {
            setProjects({...projects, projectCollection: res.data})
        })
    }, [])

    if(projects.projectCollection) {
        var renderTableContents = projects.projectCollection.map((project) => {
                return (
                    <tr key={project.key}>
                        <td>
                            <Link to={`/browse/${project.key}`}>
                            {project.name}
                            </Link>
                        </td>
                        <td>{project.key}</td>
                        <td>{project.style + ' ' + project.projectTypeKey}</td>
                        <td>{project.lead.displayName}</td>
                    </tr>
                )
            })
    }

    return(
        <div className="container">
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Key</th>
                    <th scope="col">Type</th>
                    <th scope="col">Lead</th>
                    </tr>
                </thead>
                { projects.projectCollection &&
                <tbody>
                    {renderTableContents}
                </tbody> 
                }
             </table>
             { !projects.projectCollection &&
                <div className="center-aligned">
                    <Spinner animation="border" variant="primary" />
                </div>
             }
        </div>
    )
}

export default Projects