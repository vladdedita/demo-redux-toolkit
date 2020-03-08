import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Paper } from "@material-ui/core";
import { getAllEntries } from "../../action/example";

class Example extends React.Component {
  componentDidMount() {
    this.props.getAllEntries();
  }
  render() {
    const entries = this.props.entries;
    return entries.map(entry => <Paper style= {{height: '3rem', padding:'1rem', width:'40%' ,margin: 'auto'}}>{entry.name}</Paper>);
  }
}

function mapStateToProps(state) {
  return {
    entries: state.example.entries
  };
}

const mapDispatchToProps = {
  getAllEntries
};


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Example)
);
