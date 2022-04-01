import React from "react";
import { Title, Subtitle, Body, Card, Button } from "react-bootstrap";
import { deletecontact } from "../Redux/Actions/ContactActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Contactcard({ contact }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> Username: {contact.username} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Email:{contact.email}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Age:{contact.age}
          </Card.Subtitle>
          <Button
            variant="danger"
            onClick={() => dispatch(deletecontact(contact._id))}
          >
            Delete
          </Button>
          <Link to={`/edit/${contact._id}`}>
            {" "}
            <Button variant="dark">Edit</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contactcard;
