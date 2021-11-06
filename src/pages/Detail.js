import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchdetail } from "../actions/detail";
import { Redirect } from "react-router";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Header from "../components/Header/Header";
import Detail from "../components/Detail/Detail";
import Footer from "../components/Footer/Footer";
import Theme from "../theme/theme";

const Home = (props) => {
  const { id, detail, isAuthenticated, fetchdetail } = props;
  useEffect(() => {
    fetchdetail(id);
  }, [fetchdetail, id]);
  //Redirect of logged in
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Grid container alignItems="center">
      <MuiThemeProvider theme={Theme}>
        <Header />
        <Detail detail={detail} />
        <Footer />
      </MuiThemeProvider>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    id: state.auth._id,
    isAuthenticated: state.auth.isAuthenticated,
    detail: state.auth.detail,
  };
};

const mapDispatchToProps = { fetchdetail };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
