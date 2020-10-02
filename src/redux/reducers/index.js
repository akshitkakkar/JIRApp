import { combineReducers } from "redux";
import ticketsReducer from "./ticketsReducer";
import ticketStatusTypesReducer from "./ticketStatusTypesReducer";

export default combineReducers({
ticketStatusTypes: ticketStatusTypesReducer,
tickets: ticketsReducer
})