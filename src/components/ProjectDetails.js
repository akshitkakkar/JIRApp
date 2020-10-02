import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../redux/actions'

const ProjectDetails = ({match, fetchTicketStatusTypes, fetchTickets, ticketStatusTypes, tickets}) => {

    useEffect(() => {
        fetchTicketStatusTypes(match.params.projectKey)
        fetchTickets(match.params.projectKey)
    }, [])

    return(
    
    <h2>Works!!!   {JSON.stringify(ticketStatusTypes)}  {JSON.stringify(tickets)}</h2>
    )
}

const mapStateToProps = ({ticketStatusTypes, tickets}) => {
    return {
        ticketStatusTypes,
        tickets
    }
}

export default connect(mapStateToProps, actions)(withRouter(ProjectDetails))