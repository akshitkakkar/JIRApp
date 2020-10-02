import {FETCH_TICKET_STATUS_TYPES} from '../actions/types'

export default function(state=null, action) {
    switch(action.type) {
        case FETCH_TICKET_STATUS_TYPES:
            return action.payload
        default:
            return state
    }
}