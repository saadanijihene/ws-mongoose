import { GETCONTACTS, GETONECONTACT } from "../ActionTypes/ContactTypes";

const initialState = {
  contacts: [],
  contact: {},
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETCONTACTS:
      return { ...state, contacts: action.payload.contacts };
    case GETONECONTACT:
      return { ...state, contact: action.payload.getContactById };

    default:
      return state;
  }
};
export default ContactReducer;
