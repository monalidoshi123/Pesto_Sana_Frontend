import React from "react";
import useStyles from "../Content/Content.styles";

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.nosection}>
      <h1>Welcome to StatusAirQuality!</h1>
      <h4>Please Login to Check the Air Quality</h4>
    </div>
  );
}
