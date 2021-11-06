import React from "react";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Theme from "../theme/theme";

export default function HomePage() {
  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Grid container alignItems="center">
          <Header />
          <Content />
          <Footer />
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
