import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addcontact } from "../Redux/Actions/ContactActions";
import { useNavigate } from "react-router-dom";
function Addcontact() {
  const [username, setUsrename] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setUsrename(e.target.value)}
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
            dispatch(addcontact({ username, email, age }));
            navigate("/contacts");
          }}
          type="submit"
        >
          Add
        </Button>
      </Form>
    </div>
  );
}

export default Addcontact;
