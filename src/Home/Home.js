import React, { Component } from "react";
// import { Table, Grid } from "react-bootstrap";
import ReactTable from "react-table";

import agent from "../config/agent";

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
    Header: props => <span>Price</span>, // Custom header components!
    accessor: "businesses_price",
    minWidth: 50,
  },
  {
    Header: props => <span>Yelp Link</span>, // Custom header components!
    accessor: "businesses_url",
    Cell: (props) => <a href={props.value} target="_blank" rel="noopener noreferrer">Yelp</a>,
    minWidth: 50,
  }
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  titleCase(str) {
    str = str.split('-toronto')[0].replace(/-/gi, ' ');
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

  componentDidMount() {
    agent.Helper.getAll()
      .then(res => {
        let res_array = [];
        res.data.forEach(element => {
          if (element.businesses_alias) {
            const final_object = {};
            final_object.businesses_alias = this.titleCase(element.businesses_alias)
            final_object.businesses_url = element.businesses_url;
            final_object.businesses_rating = element.businesses_rating;
            final_object.businesses_categories_title =
              element.businesses_categories_title;
            final_object.businesses_price = element.businesses_price;
            res_array.push(final_object);
          }
        });
        return res_array;
      }).then(res_array => this.setState({ list: res_array }));
  }

  render() {

    if (this.state.list) {
      return (
        <div>
          <ReactTable className="-striped -highlight" data={this.state.list} columns={columns} />
          <p>Made with <span style={{color: "#e25555"}}>&#9829;</span> in <a href="https://www.linkedin.com/in/smitthakkar1/" rel="noopener noreferrer" target="_blank">USA</a> and <a href="https://www.linkedin.com/in/hardikjogi/" rel="noopener noreferrer" target="_blank">Canada</a></p>
        </div>
      )}
    return <h1> Loading... </h1>;
  }
}
