import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontacts } from "../Redux/Actions/ContactActions";
import Contactcard from "./Contactcard";

function Contactslist() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcontacts());
  }, []);
  const contacts = useSelector((state) => state.ContactReducer.contacts);
  return (
    <div>
      {contacts.map((contact) => (
        <Contactcard contact={contact}></Contactcard>
      ))}
    </div>
  );
}

export default Contactslist;
