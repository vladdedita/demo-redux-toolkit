import React, { Component, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { Paper, Button } from "@material-ui/core";
// import { getAllEntries } from "../../action/example";
import { fetchEntries } from "../../reducer/example/example";

function Example() {
  const { entries } = useSelector(state => state.example);
  debugger;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntries());
  });

  return (
    <div>
        <Button> Add entry </Button>
      {entries.map(entry => (
        <Paper
          style={{
            height: "3rem",
            padding: "1rem",
            width: "40%",
            margin: "auto"
          }}
        >
          {entry.name}
        </Paper>
      ))}
    </div>
  );
}

export default withRouter(Example);
