import React, { Component, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { Paper, Button } from "@material-ui/core";

import { useSelector } from "react-redux";
import { fetchAllEntries, addEntry } from "../../reducer/example/example";
const Example = () => {
  const dispatch = useDispatch();
  const { entries } = useSelector(state => state.example);
  const [orice, setOrice] = useState(0);

  useEffect(() => {
    dispatch(fetchAllEntries());
    setOrice(1);
  },[]);

  return (
    <>
      <Button onClick={() => dispatch(addEntry("entry"))}>Add entry</Button>

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
    </>
  );
};

export default withRouter(Example);
