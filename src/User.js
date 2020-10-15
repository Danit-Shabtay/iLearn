import React from "react";
import Button from "@material-ui/core/Button";

export default function User(props) {
  return (
    <p>
      Id: {props.id} <br />
      Name: {props.name} <br />
      Username: {props.username} <br />
      Email: {props.email} <br />
      Phone: {props.phone} <br />
      Website: {props.website} <br />
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </p>
  );
}
