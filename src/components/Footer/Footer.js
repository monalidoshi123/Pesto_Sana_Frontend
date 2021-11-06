import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import useStyles from "./Footer.styles";
import Typography from "../Typography/Typography";

export default function Footer() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Box mt={5}>
        <Typography
          type="Caption"
          text={"© 2021 StatusAirQuality"}
          align="center"
        />
      </Box>
    </Container>
  );
}
