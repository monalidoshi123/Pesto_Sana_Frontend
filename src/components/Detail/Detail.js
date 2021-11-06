import React from "react";
import useStyles from "../Content/Content.styles";
import Card from "../Card/Card";

export default function Detail(props) {
  const classes = useStyles();
  return (
    <div className={classes.nosection}>
      <h1>AirQuality Report</h1>
      {props.detail && props.detail.aqi ? (
        <Card
          value={props.detail.aqi}
          text={
            "Current Air-Quality at your location(" +
            props.detail.location +
            ") is " +
            props.detail.level +
            " than your threshold(" +
            props.detail.threshold +
            ")"
          }
          level={props.detail.level}
        />
      ) : props.detail ? (
        <Card text="Sorry, No detail available for your location" />
      ) : (
        <Card text="Loading..." />
      )}
    </div>
  );
}
