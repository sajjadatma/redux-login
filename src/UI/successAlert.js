import React from "react";
import Alert from "@material-ui/lab/Alert";
import Fade from "@material-ui/core/Fade";

const successAlert = (props) => {
  return (
    <Fade in timeout={500}>
      <Alert variant="filled" severity="success">
        {props.title}
      </Alert>
    </Fade>
  );
};

export default successAlert;
