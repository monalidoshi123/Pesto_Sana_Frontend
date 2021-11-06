import React from "react";
import useStyles from "./Card.styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

export default function Cardcomponent(props) {
  const classes = useStyles();

  return (
    <Grid
      style={{
        alignItems: "center",
        justifySelf: "center",
        textAlign: "-webkit-center",
      }}
    >
      <Card className={classes.cardStyle}>
        <CardContent className={classes.cardText}>
          <Typography
            variant="h2"
            component="h2"
            className={
              props.level === "higher"
                ? classes.higherStyle
                : classes.lowerStyle
            }
          >
            {props.value}
          </Typography>
          <div className={classes.textDetail}>
            <Typography>{props.text}</Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
