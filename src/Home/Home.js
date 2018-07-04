import React, { Component } from "react";
// import { Table, Grid } from "react-bootstrap";
import ReactTable from "react-table";

import agent from "../config/agent";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    agent.Helper.getAll()
      .then(res => {
        let res_array = [];
        res.data.forEach(element => {
          if (element.businesses_alias) {
            const final_object = {};
            final_object.businesses_alias = element.businesses_alias.split('-toronto')[0].replace(/-/gi, ' ');
            final_object.businesses_url = element.businesses_url;
            final_object.businesses_rating = element.businesses_rating;
            final_object.businesses_categories_title =
              element.businesses_categories_title;
            res_array.push(final_object);
          }
        });
        return res_array;
      })
      .then(res_array => this.setState({ list: res_array }));
  }

  render() {
    console.log(this.state.list);
    //   return (
    //     <Grid>
    //       <Header />
    //       <Table responsive>
    //         <thead>
    //           <tr>
    //             <th>Name</th>
    //             <th>Location</th>
    //             <th>Address</th>
    //           </tr>
    //         </thead>
    //       </Table>
    //     </Grid>
    //   );

    const columns = [
      {
        Header: "Restaurant Name",
        accessor: "businesses_alias", // String-based value accessors!
        minWidth:150,
      },
      {
        Header: "Categories",
        accessor: "businesses_categories_title",
        minWidth: 100
      },
      {
        Header: "Yelp Reviews",
        accessor: "businesses_rating",
        minWidth: 50
      },
      {
        Header: props => <span>Yelp Link</span>, // Custom header components!
        accessor: "businesses_url",
        Cell: (props) => <a href={props.value}>Yelp</a>,
        minWidth: 50,
      }
    ];
    if (this.state.list) {
      return <ReactTable className="-striped -highlight" data={this.state.list} columns={columns} />;
    }
    return <h1> Loading... </h1>;
  }
}
