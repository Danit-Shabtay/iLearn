import React from "react";
import User from "./User";
import Grid from "@material-ui/core/Grid";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.importUsers();
  }

  importUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          users: json,
        })
      );
  }

  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            {this.state.users.map((user) => {
              return (
                <Grid item xs={4}>
                  <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    phone={user.phone}
                    website={user.website}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
}
