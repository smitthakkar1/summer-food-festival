import React, { Component } from "react";
import { Table, Grid } from "react-bootstrap";

import { Header } from "../Header/Header";
import agent from "../config/agent";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    agent.Helper.getAll().then(res => this.setState({ list: res.data }));
  }

  render() {
    console.log(this.state);
    return (
      <Grid>
        <Header />
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Address</th>
            </tr>
          </thead>
        </Table>
      </Grid>
    );
  }
}
