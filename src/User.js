import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function User(props) {
  return (
    <p>
      Id: {props.id} <br />
      Name: {props.name} <br />
      Username: {props.username} <br />
      Email: {props.email} <br />
      Phone: {props.phone} <br />
      Website: {props.website} <br />
      <Link to="/UserDetails">
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </Link>

    </p>
  );
}
