import {FETCH_TICKET_STATUS_TYPES, FETCH_TICKETS} from './types'
import axios from 'axios'
import { KEYS } from '../../config/dev'

export const fetchTicketStatusTypes = (key) => 
    async dispatch => {
        const res = await axios.get(`${KEYS.JIRA_DOMAIN}${KEYS.GET_JIRA_PROJECTS}/${key}/statuses`, {
            headers: {
                'Authorization' : KEYS.API_AUTH_KEY
            }
        })
    dispatch({type: FETCH_TICKET_STATUS_TYPES, payload: res.data[0].statuses})
        
    }

export const fetchTickets = (key) => 
    async dispatch => {
        const res = await axios.get(`${KEYS.JIRA_DOMAIN}${KEYS.SEARCH_JIRA_API}?jql=project=${key}`, {
            headers: {
                'Authorization' : KEYS.API_AUTH_KEY
            }
        })
        dispatch({type: FETCH_TICKETS, payload: res.data.issues})
    }