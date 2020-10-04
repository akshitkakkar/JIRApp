import React, {useEffect, useState} from 'react'
import { CardGroup, Card, Button, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import * as actions from '../redux/actions'
import VerticallyCenteredModal from './VerticallyCenteredModal';

const ProjectDetails = ({match, fetchTicketStatusTypes, fetchTickets, ticketStatusTypes, tickets, clearTicketStatusTypesOnUnmout, clearTicketsOnUnmount}) => {

    const [modalShow, setModalShow] = useState(false)
    const [selectedIssue, setselectedIssue] = useState({data: null})

    useEffect(() => {
        fetchTicketStatusTypes(match.params.projectKey)
        fetchTickets(match.params.projectKey)

        return () => {
            clearTicketStatusTypesOnUnmout()
            clearTicketsOnUnmount()
        }
    }, [])

    const renderIssueBoard = () => {
        return ticketStatusTypes.map((ticketStatus) => {
            return (
                <Card key={ticketStatus.id} className="card-container">
                    <Card.Title>{ticketStatus.name}</Card.Title>
                    {
                        tickets.map((ticket, index) => {
                            if(ticket.fields.status.id === ticketStatus.id) {
                                return (
                                    <Card.Body key={ticket.key} className="issue-card-body">
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
                                                        {ticket.fields.assignee && <img className="assignee-image" src={ticket.fields.assignee.avatarUrls["48x48"]}></img>}
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
        <div className="container project-issue-board-background">
            <Link to="/projects">
                <Button variant="primary" className="project-issue-board">
                    Back To Projects
                </Button>
            </Link>
            { ticketStatusTypes && tickets &&
            <CardGroup>
                {renderIssueBoard()}
            </CardGroup>}

            { (!ticketStatusTypes || !tickets) &&
                <div className="center-aligned">
                    <Spinner className="spinner" animation="border" variant="primary" />
                </div>
            }

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