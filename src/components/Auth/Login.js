import React, { useState } from "react";
import TextField from "../Textfield/Textfield";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect } from "react-router";
import useStyles from "./Login.styles";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Alert from "../Alert/Alert";

function Login(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const onSubmit = async (e) => {
    props.login(email, password);
  };
  const [emailError, setEmailError] = useState({
    helperText: "",
    error: false,
  });
  const [passwordError, setPasswordError] = useState({
    helperText: "",
    error: false,
  });

  //Redirect if logged in
  if (props.isAuthenticated) {
    return <Redirect to="/detail" />;
  }

  const hasError = () => {
    return (
      formData.email.trim() === "" ||
      emailError.error ||
      formData.password === "" ||
      passwordError.error
    );
  };

  return (
    <div className={classes.nosection}>
      <h1>Login</h1>
      <TextField
        label="Email"
        field="form"
        handleChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        error={emailError.error}
        onFocus={() => setEmailError({ helperText: "", error: false })}
        onBlur={() =>
          setEmailError({
            helperText: "Email is required",
            error: formData.email.trim() === "",
          })
        }
        helperText={emailError.error ? emailError.helperText : ""}
      />
      <br />
      <TextField
        type="password"
        field="form"
        label="Password"
        handleChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
        error={passwordError.error}
        onFocus={() => setPasswordError({ helperText: "", error: false })}
        onBlur={() =>
          setPasswordError({
            helperText: "Email is required",
            error: formData.password.trim() === "",
          })
        }
        helperText={passwordError.error ? passwordError.helperText : ""}
      />
      <br />
      <Alert />
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={onSubmit}
        disabled={hasError()}
      >
        Login
      </Button>
      <br />
      New user? Click here to{" "}
      <Link
        key={"Signup"}
        {...{
          color: "inherit",
          component: RouterLink,
          to: "/register",
        }}
      >
        Signup
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    id: state.auth._id,
  };
};

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
