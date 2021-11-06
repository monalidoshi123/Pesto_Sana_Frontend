import React from "react";
import { connect } from "react-redux";
import useStyles from "./Alert.styles";

const Alert = (props) => {
  const classes = useStyles();
  return (
    props.alerts != null &&
    props.alerts.length > 0 &&
    props.alerts.map((alert) => (
      <div key={alert.id} className={classes.divStyle}>
        {alert.msg}
      </div>
    ))
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
