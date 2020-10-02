import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {KEYS} from '../config/dev'
import { Link } from 'react-router-dom'


const Projects = () => {

    //const [projects, setProjects] = useState({projectCollection: ''})

    const [projects, setProjects] = useState({
        "projectCollection": [
          {
            "expand": "description,lead,issueTypes,url,projectKeys,permissions,insight",
            "self": "https://localhostapp.atlassian.net/rest/api/2/project/10000",
            "id": "10000",
            "key": "LA1",
            "lead": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/user?accountId=5f74ee70287870006af89ced",
              "accountId": "5f74ee70287870006af89ced",
              "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "24x24": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "16x16": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "32x32": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png"
              },
              "displayName": "Akshit Kakkar",
              "active": true
            },
            "name": "Localhost App 1",
            "avatarUrls": {
              "48x48": "https://localhostapp.atlassian.net/secure/projectavatar?pid=10000&avatarId=10419",
              "24x24": "https://localhostapp.atlassian.net/secure/projectavatar?size=small&s=small&pid=10000&avatarId=10419",
              "16x16": "https://localhostapp.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=10000&avatarId=10419",
              "32x32": "https://localhostapp.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10000&avatarId=10419"
            },
            "projectTypeKey": "software",
            "simplified": false,
            "style": "classic",
            "isPrivate": false,
            "properties": {
              
            }
          },
          {
            "expand": "description,lead,issueTypes,url,projectKeys,permissions,insight",
            "self": "https://localhostapp.atlassian.net/rest/api/2/project/10002",
            "id": "10002",
            "key": "LAS",
            "lead": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/user?accountId=5f74ee70287870006af89ced",
              "accountId": "5f74ee70287870006af89ced",
              "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "24x24": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "16x16": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "32x32": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png"
              },
              "displayName": "Akshit Kakkar",
              "active": true
            },
            "name": "Localhost App Scrum",
            "avatarUrls": {
              "48x48": "https://localhostapp.atlassian.net/secure/projectavatar?pid=10002&avatarId=10425",
              "24x24": "https://localhostapp.atlassian.net/secure/projectavatar?size=small&s=small&pid=10002&avatarId=10425",
              "16x16": "https://localhostapp.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=10002&avatarId=10425",
              "32x32": "https://localhostapp.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10002&avatarId=10425"
            },
            "projectTypeKey": "software",
            "simplified": false,
            "style": "classic",
            "isPrivate": false,
            "properties": {
              
            }
          }
        ]
      })

    // useEffect(() => {
    //     axios.get(`${KEYS.JIRA_DOMAIN}${KEYS.GET_JIRA_PROJECTS}?expand=lead`, {
    //         headers: {
    //             'Authorization' : KEYS.API_AUTH_KEY
    //         }
    //     })
    //     .then((res) => {
    //         setProjects({...projects, projectCollection: res.data})
    //     })
    // }, [])

    const renderTableContents = projects.projectCollection.map((project) => {
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

    return(
        <div className="container">
            {JSON.stringify(projects)}
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Key</th>
                    <th scope="col">Type</th>
                    <th scope="col">Lead</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableContents}
                </tbody>
             </table>
        </div>
    )
}

export default Projects