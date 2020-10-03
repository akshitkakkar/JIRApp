import {FETCH_TICKET_STATUS_TYPES, FETCH_TICKETS} from './types'
import axios from 'axios'
import { KEYS } from '../../config/dev'

export const fetchTicketStatusTypes = (key) => 
    async dispatch => {
        //const res = await axios.get(`${KEYS.PROXY_DOMAIN}${KEYS.GET_TICKET_STATUS_TYPES}/${key}`)
        const res = await axios.get(`${KEYS.PROXY_DOMAIN}${KEYS.GET_TICKET_STATUS_TYPES}/${key}`)
        dispatch({type: FETCH_TICKET_STATUS_TYPES, payload: res.data[0].statuses})
        
    }

export const fetchTickets = (key) => 
    async dispatch => {
        const res = await axios.get(`${KEYS.PROXY_DOMAIN}${KEYS.GET_TICKETS}/${key}`)
        dispatch({type: FETCH_TICKETS, payload: res.data.issues})
    }