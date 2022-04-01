import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editcontact, getonecontact } from "../Redux/Actions/ContactActions";
import { useNavigate } from "react-router-dom";
function Editcontact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getonecontact(id));
  }, []);
  const contact = useSelector((state) => state.ContactReducer.contact);
  console.log("contact", contact);
  const [username, setUsername] = useState(contact.username);
  const [email, setEmail] = useState(contact.email);
  const [age, setAge] = useState(contact.age);
  useEffect(() => {
    setUsername(contact.username);
    setEmail(contact.email);
    setAge(contact.age);
  }, [contact]);
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="user"
            placeholder="UserName"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            placeholder="Age"
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(editcontact(id, { username, email, age }));
            navigate("/contacts");
          }}
          type="submit"
        >
          Edit
        </Button>
      </Form>
    </div>
  );
}

export default Editcontact;
