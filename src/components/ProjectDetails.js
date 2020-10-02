import React, {useEffect, useState} from 'react'
import { CardGroup, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../redux/actions'
import VerticallyCenteredModal from './VerticallyCenteredModal';

const ProjectDetails = ({match, fetchTicketStatusTypes, fetchTickets, ticketStatusTypes, tickets}) => {

    const [ticketStatusTypesTest, setticketStatusTypesTest] = useState([
        {
          "self": "https://localhostapp.atlassian.net/rest/api/2/status/10011",
          "description": "",
          "iconUrl": "https://localhostapp.atlassian.net/",
          "name": "To Do",
          "untranslatedName": "To Do",
          "id": "10011",
          "statusCategory": {
            "self": "https://localhostapp.atlassian.net/rest/api/2/statuscategory/2",
            "id": 2,
            "key": "new",
            "colorName": "blue-gray",
            "name": "To Do"
          }
        },
        {
          "self": "https://localhostapp.atlassian.net/rest/api/2/status/3",
          "description": "This issue is being actively worked on at the moment by the assignee.",
          "iconUrl": "https://localhostapp.atlassian.net/images/icons/statuses/inprogress.png",
          "name": "In Progress",
          "untranslatedName": "In Progress",
          "id": "3",
          "statusCategory": {
            "self": "https://localhostapp.atlassian.net/rest/api/2/statuscategory/4",
            "id": 4,
            "key": "indeterminate",
            "colorName": "yellow",
            "name": "In Progress"
          }
        },
        {
          "self": "https://localhostapp.atlassian.net/rest/api/2/status/10002",
          "description": "",
          "iconUrl": "https://localhostapp.atlassian.net/",
          "name": "Done",
          "untranslatedName": "Done",
          "id": "10002",
          "statusCategory": {
            "self": "https://localhostapp.atlassian.net/rest/api/2/statuscategory/3",
            "id": 3,
            "key": "done",
            "colorName": "green",
            "name": "Done"
          }
        }
      ])
    const [ticketsTest, setticketsTest] = useState([
        {
          "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
          "id": "10011",
          "self": "https://localhostapp.atlassian.net/rest/api/2/issue/10011",
          "key": "LAS-3",
          "fields": {
            "statuscategorychangedate": "2020-10-01T17:16:13.496+0530",
            "issuetype": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/issuetype/10004",
              "id": "10004",
              "description": "A problem or error.",
              "iconUrl": "https://localhostapp.atlassian.net/secure/viewavatar?size=medium&avatarId=10303&avatarType=issuetype",
              "name": "Bug",
              "subtask": false,
              "avatarId": 10303
            },
            "timespent": null,
            "project": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/project/10002",
              "id": "10002",
              "key": "LAS",
              "name": "Localhost App Scrum",
              "projectTypeKey": "software",
              "simplified": false,
              "avatarUrls": {
                "48x48": "https://localhostapp.atlassian.net/secure/projectavatar?pid=10002&avatarId=10425",
                "24x24": "https://localhostapp.atlassian.net/secure/projectavatar?size=small&s=small&pid=10002&avatarId=10425",
                "16x16": "https://localhostapp.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=10002&avatarId=10425",
                "32x32": "https://localhostapp.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10002&avatarId=10425"
              }
            },
            "customfield_10032": null,
            "customfield_10033": null,
            "fixVersions": [
              
            ],
            "customfield_10034": null,
            "aggregatetimespent": null,
            "resolution": null,
            "customfield_10035": null,
            "customfield_10027": [
              
            ],
            "customfield_10028": null,
            "customfield_10029": null,
            "resolutiondate": null,
            "workratio": -1,
            "watches": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/issue/LAS-3/watchers",
              "watchCount": 1,
              "isWatching": true
            },
            "lastViewed": "2020-10-02T21:26:09.264+0530",
            "created": "2020-10-01T17:05:33.890+0530",
            "customfield_10020": [
              {
                "id": 1,
                "name": "LAS Sprint 1",
                "state": "active",
                "boardId": 2,
                "goal": "",
                "startDate": "2020-10-01T11:35:03.335Z",
                "endDate": "2020-10-15T11:35:00.000Z"
              }
            ],
            "customfield_10021": null,
            "customfield_10022": null,
            "priority": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/priority/3",
              "iconUrl": "https://localhostapp.atlassian.net/images/icons/priorities/medium.svg",
              "name": "Medium",
              "id": "3"
            },
            "customfield_10023": null,
            "customfield_10024": null,
            "customfield_10025": null,
            "customfield_10026": null,
            "labels": [
              
            ],
            "customfield_10016": null,
            "customfield_10017": null,
            "customfield_10018": {
              "hasEpicLinkFieldDependency": false,
              "showField": false,
              "nonEditableReason": {
                "reason": "PLUGIN_LICENSE_ERROR",
                "message": "The Parent Link is only available to Jira Premium users."
              }
            },
            "customfield_10019": "0|i0002f:",
            "aggregatetimeoriginalestimate": null,
            "timeestimate": null,
            "versions": [
              
            ],
            "issuelinks": [
              
            ],
            "assignee": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/user?accountId=5f74ee70287870006af89ced",
              "accountId": "5f74ee70287870006af89ced",
              "emailAddress": "kakkar.akshit@yahoo.com",
              "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "24x24": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "16x16": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "32x32": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png"
              },
              "displayName": "Akshit Kakkar",
              "active": true,
              "timeZone": "Asia/Calcutta",
              "accountType": "atlassian"
            },
            "updated": "2020-10-01T17:16:13.496+0530",
            "status": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/status/3",
              "description": "This issue is being actively worked on at the moment by the assignee.",
              "iconUrl": "https://localhostapp.atlassian.net/images/icons/statuses/inprogress.png",
              "name": "In Progress",
              "id": "3",
              "statusCategory": {
                "self": "https://localhostapp.atlassian.net/rest/api/2/statuscategory/4",
                "id": 4,
                "key": "indeterminate",
                "colorName": "yellow",
                "name": "In Progress"
              }
            },
            "components": [
              
            ],
            "timeoriginalestimate": null,
            "description": null,
            "customfield_10010": null,
            "customfield_10014": null,
            "customfield_10015": null,
            "customfield_10005": null,
            "customfield_10006": null,
            "security": null,
            "customfield_10007": null,
            "customfield_10008": null,
            "aggregatetimeestimate": null,
            "customfield_10009": null,
            "summary": "Scrum Bug",
            "creator": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/user?accountId=5f74ee70287870006af89ced",
              "accountId": "5f74ee70287870006af89ced",
              "emailAddress": "kakkar.akshit@yahoo.com",
              "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "24x24": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "16x16": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "32x32": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png"
              },
              "displayName": "Akshit Kakkar",
              "active": true,
              "timeZone": "Asia/Calcutta",
              "accountType": "atlassian"
            },
            "subtasks": [
              
            ],
            "reporter": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/user?accountId=5f74ee70287870006af89ced",
              "accountId": "5f74ee70287870006af89ced",
              "emailAddress": "kakkar.akshit@yahoo.com",
              "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "24x24": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "16x16": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "32x32": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png"
              },
              "displayName": "Akshit Kakkar",
              "active": true,
              "timeZone": "Asia/Calcutta",
              "accountType": "atlassian"
            },
            "customfield_10000": "{}",
            "aggregateprogress": {
              "progress": 0,
              "total": 0
            },
            "customfield_10001": null,
            "customfield_10002": null,
            "customfield_10003": null,
            "customfield_10004": null,
            "environment": null,
            "duedate": null,
            "progress": {
              "progress": 0,
              "total": 0
            },
            "votes": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/issue/LAS-3/votes",
              "votes": 0,
              "hasVoted": false
            }
          }
        },
        {
          "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
          "id": "10010",
          "self": "https://localhostapp.atlassian.net/rest/api/2/issue/10010",
          "key": "LAS-2",
          "fields": {
            "statuscategorychangedate": "2020-10-01T17:05:02.511+0530",
            "issuetype": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/issuetype/10001",
              "id": "10001",
              "description": "Functionality or a feature expressed as a user goal.",
              "iconUrl": "https://localhostapp.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype",
              "name": "Story",
              "subtask": false,
              "avatarId": 10315
            },
            "timespent": null,
            "project": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/project/10002",
              "id": "10002",
              "key": "LAS",
              "name": "Localhost App Scrum",
              "projectTypeKey": "software",
              "simplified": false,
              "avatarUrls": {
                "48x48": "https://localhostapp.atlassian.net/secure/projectavatar?pid=10002&avatarId=10425",
                "24x24": "https://localhostapp.atlassian.net/secure/projectavatar?size=small&s=small&pid=10002&avatarId=10425",
                "16x16": "https://localhostapp.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=10002&avatarId=10425",
                "32x32": "https://localhostapp.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10002&avatarId=10425"
              }
            },
            "customfield_10032": null,
            "fixVersions": [
              
            ],
            "customfield_10033": null,
            "aggregatetimespent": null,
            "customfield_10034": null,
            "customfield_10035": null,
            "resolution": null,
            "customfield_10036": null,
            "customfield_10027": [
              
            ],
            "customfield_10028": null,
            "customfield_10029": null,
            "resolutiondate": null,
            "workratio": -1,
            "lastViewed": "2020-10-02T21:26:37.987+0530",
            "watches": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/issue/LAS-2/watchers",
              "watchCount": 1,
              "isWatching": true
            },
            "created": "2020-10-01T17:05:02.197+0530",
            "customfield_10020": [
              {
                "id": 1,
                "name": "LAS Sprint 1",
                "state": "active",
                "boardId": 2,
                "goal": "",
                "startDate": "2020-10-01T11:35:03.335Z",
                "endDate": "2020-10-15T11:35:00.000Z"
              }
            ],
            "customfield_10021": null,
            "customfield_10022": null,
            "priority": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/priority/3",
              "iconUrl": "https://localhostapp.atlassian.net/images/icons/priorities/medium.svg",
              "name": "Medium",
              "id": "3"
            },
            "customfield_10023": null,
            "customfield_10024": null,
            "customfield_10025": null,
            "customfield_10026": null,
            "labels": [
              
            ],
            "customfield_10016": null,
            "customfield_10017": null,
            "customfield_10018": {
              "hasEpicLinkFieldDependency": false,
              "showField": false,
              "nonEditableReason": {
                "reason": "PLUGIN_LICENSE_ERROR",
                "message": "The Parent Link is only available to Jira Premium users."
              }
            },
            "customfield_10019": "0|i00027:",
            "aggregatetimeoriginalestimate": null,
            "timeestimate": null,
            "versions": [
              
            ],
            "issuelinks": [
              
            ],
            "assignee": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/user?accountId=5f74ee70287870006af89ced",
              "accountId": "5f74ee70287870006af89ced",
              "emailAddress": "kakkar.akshit@yahoo.com",
              "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "24x24": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "16x16": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "32x32": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png"
              },
              "displayName": "Akshit Kakkar",
              "active": true,
              "timeZone": "Asia/Calcutta",
              "accountType": "atlassian"
            },
            "updated": "2020-10-02T21:26:23.921+0530",
            "status": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/status/10011",
              "description": "",
              "iconUrl": "https://localhostapp.atlassian.net/",
              "name": "To Do",
              "id": "10011",
              "statusCategory": {
                "self": "https://localhostapp.atlassian.net/rest/api/2/statuscategory/2",
                "id": 2,
                "key": "new",
                "colorName": "blue-gray",
                "name": "To Do"
              }
            },
            "components": [
              
            ],
            "timeoriginalestimate": null,
            "description": "This is a scrum story",
            "customfield_10010": null,
            "customfield_10014": null,
            "customfield_10015": null,
            "customfield_10005": null,
            "customfield_10006": null,
            "customfield_10007": null,
            "security": null,
            "customfield_10008": null,
            "customfield_10009": null,
            "aggregatetimeestimate": null,
            "summary": "Scrum Story",
            "creator": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/user?accountId=5f74ee70287870006af89ced",
              "accountId": "5f74ee70287870006af89ced",
              "emailAddress": "kakkar.akshit@yahoo.com",
              "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "24x24": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "16x16": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "32x32": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png"
              },
              "displayName": "Akshit Kakkar",
              "active": true,
              "timeZone": "Asia/Calcutta",
              "accountType": "atlassian"
            },
            "subtasks": [
              
            ],
            "reporter": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/user?accountId=5f74ee70287870006af89ced",
              "accountId": "5f74ee70287870006af89ced",
              "emailAddress": "kakkar.akshit@yahoo.com",
              "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "24x24": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "16x16": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png",
                "32x32": "https://secure.gravatar.com/avatar/6e4a5deda56651efd32ee1b806a0f51e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-2.png"
              },
              "displayName": "Akshit Kakkar",
              "active": true,
              "timeZone": "Asia/Calcutta",
              "accountType": "atlassian"
            },
            "customfield_10000": "{}",
            "aggregateprogress": {
              "progress": 0,
              "total": 0
            },
            "customfield_10001": null,
            "customfield_10002": null,
            "customfield_10003": null,
            "customfield_10004": null,
            "environment": null,
            "duedate": null,
            "progress": {
              "progress": 0,
              "total": 0
            },
            "votes": {
              "self": "https://localhostapp.atlassian.net/rest/api/2/issue/LAS-2/votes",
              "votes": 0,
              "hasVoted": false
            }
          }
        }
      ])

    const [modalShow, setModalShow] = useState(false)
    const [selectedIssue, setselectedIssue] = useState({data: null})

    useEffect(() => {
        fetchTicketStatusTypes(match.params.projectKey)
        fetchTickets(match.params.projectKey)
    }, [])

    const renderIssueBoard = () => {
        return ticketStatusTypesTest.map((ticketStatus) => {
            return (
                <Card key={ticketStatus.id}>
                    <Card.Title>{ticketStatus.name}</Card.Title>
                    {
                        ticketsTest.map((ticket, index) => {
                            if(ticket.fields.status.id === ticketStatus.id) {
                                return (
                                    <Card.Body key={ticket.key}>
                                        <Button variant="light" size="lg" block onClick={() => {
                                            setselectedIssue({...selectedIssue, data: ticket})
                                            setModalShow(true)
                                        }}>
                                            <div className="row">
                                                <div className="issue-summary-container col-md-5">
                                                    <span className="issue-summary">
                                                        {ticket.fields.summary}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 issue-summary-container">
                                                    <img src={ticket.fields.issuetype.iconUrl}></img>
                                                    <img src={ticket.fields.priority.iconUrl}></img>
                                                </div>
                                                <div className="col-md-4">
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="issue-id-container">
                                                        <span className="issue-id">{ticket.key}</span>
                                                        <img className="assignee-image" src={ticket.fields.assignee.avatarUrls["48x48"]}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </Button>
                                    </Card.Body>
                                )
                            }
                        })
                    }
                </Card>
            )
            
        })
    }
    
    return(
        <div className="container">
            <CardGroup>
                {renderIssueBoard()}
            </CardGroup>

            {/* <CardGroup>
                <Card>
                    <Card.Title>Card title</Card.Title>
                    <Card.Body className="issue-card-body">
                    <Button variant="light" size="lg" block onClick={() => setModalShow(true)}>
                        <div className="row">
                            <div className="issue-summary-container col-md-5">
                                <span className="issue-summary">
                                    Scrum Story
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 issue-summary-container">
                                <img src="https://localhostapp.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype"></img>
                                <img src="https://localhostapp.atlassian.net/images/icons/priorities/medium.svg"></img>
                            </div>
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                                <div className="issue-id-container">
                                    <span className="issue-id">LAS-2</span>
                                    <img className="assignee-image" src="https://i2.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/AK-2.png?ssl=1"></img>
                                </div>
                            </div>
                        </div>
                    </Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title>Card title</Card.Title>
                    <Card.Body>
                    <Button variant="light" size="lg" block>
                        Block level button
                    </Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title>Card title</Card.Title>
                    <Card.Body>
                    <Button variant="light" size="lg" block>
                        Block level button
                    </Button>
                    </Card.Body>
                </Card>
            </CardGroup> */}

           { modalShow && <VerticallyCenteredModal selectedIssue={selectedIssue} show={true} onHide={()=> setModalShow(false)}/>}
        </div>
    )
}

const mapStateToProps = ({ticketStatusTypes, tickets}) => {
    return {
        ticketStatusTypes,
        tickets
    }
}

export default connect(mapStateToProps, actions)(withRouter(ProjectDetails))