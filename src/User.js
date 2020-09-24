import React from "react";

export default function User(props) {
  return (
    <p>
      Id: {props.id} <br />
      Name: {props.name} <br />
      Username: {props.username} <br />
      Email: {props.email} <br />
      Phone: {props.phone} <br />
      Website: {props.website} <br />
    </p>
  );
}
