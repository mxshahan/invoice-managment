import { combineReducers } from "redux";
import invoiceReducer from "./invoiceReducer";

export default combineReducers({
  invoice: invoiceReducer
});
