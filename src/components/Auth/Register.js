import React, { useState } from "react";
import TextField from "../Textfield/Textfield";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Select from "../Select/Select";
import { Redirect } from "react-router";
import useStyles from "./Register.styles";
import { register } from "../../actions/auth";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import Alert from "../Alert/Alert";

function Register(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "Beijing",
    threshold: 0,
  });
  const { firstName, lastName, email, password, location, threshold } =
    formData;

  const onSubmit = async (e) => {
    props.register(firstName, lastName, email, password, location, threshold);
    //toast("Signup Successful!");
  };

  const [firstNameError, setFirstNameError] = useState({
    helperText: "",
    error: false,
  });
  const [lastNameError, setLastNameError] = useState({
    helperText: "",
    error: false,
  });
  const [thresholdError, setThresholdError] = useState({
    helperText: "",
    error: false,
  });
  const [emailError, setEmailError] = useState({
    helperText: "",
    error: false,
  });
  const [passwordError, setPasswordError] = useState({
    helperText: "",
    error: false,
  });

  const validatePassword = () => {
    // regular rexpression to validate password
    const regex = new RegExp("^[A-Za-z]\\w{5,15}$");
    if (formData.password) {
      if (!regex.test(formData.password.trim())) {
        setPasswordError({
          helperText: "Password must be atleast 6 character",
          error: true,
        });
      }
    } else {
      setPasswordError({
        helperText: "Password must be atleast 6 character",
        error: true,
      });
    }
  };

  const validateEmail = () => {
    // regular rexpression to validate password
    const regex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    if (formData.email) {
      if (!regex.test(formData.email.trim())) {
        setEmailError({
          helperText: "Invalid email address",
          error: true,
        });
      }
    } else {
      setEmailError({
        helperText: "Invalid email address",
        error: true,
      });
    }
  };

  //Redirect if logged in
  if (props.isAuthenticated) {
    return <Redirect to="/detail" />;
  }
  const hasError = () => {
    return (
      formData.firstName.trim() === "" ||
      firstNameError.error ||
      formData.lastName.trim() === "" ||
      lastNameError.error ||
      formData.threshold === "" ||
      thresholdError.error ||
      formData.password === "" ||
      passwordError.error ||
      emailError.error ||
      passwordError.error
    );
  };
  return (
    <>
      <div className={classes.nosection}>
        <h1>Signup</h1>
        <TextField
          label="First Name"
          handleChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          error={firstNameError.error}
          onFocus={() => setFirstNameError({ helperText: "", error: false })}
          onBlur={() =>
            setFirstNameError({
              helperText: "First name is required",
              error: formData.firstName.trim() === "",
            })
          }
          helperText={firstNameError.error ? firstNameError.helperText : ""}
        />
        <br />
        <TextField
          label="Last Name"
          handleChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          error={lastNameError.error}
          onFocus={() => setLastNameError({ helperText: "", error: false })}
          onBlur={() =>
            setLastNameError({
              helperText: "Last name is required",
              error: formData.lastName.trim() === "",
            })
          }
          helperText={lastNameError.error ? lastNameError.helperText : ""}
        />
        <br />
        <TextField
          label="Email"
          handleChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          error={emailError.error}
          onFocus={() => setEmailError({ helperText: "", error: false })}
          onBlur={validateEmail}
          helperText={emailError.error ? emailError.helperText : ""}
        />
        <br />
        <TextField
          type="password"
          label="Password"
          handleChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          error={passwordError.error}
          onFocus={() => setPasswordError({ helperText: "", error: false })}
          onBlur={validatePassword}
          helperText={passwordError.error ? passwordError.helperText : ""}
        />
        <Select
          label="Location"
          handleChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          value={formData.location}
        />
        <TextField
          label="Threshold"
          handleChange={(e) =>
            setFormData({ ...formData, threshold: e.target.value })
          }
          error={thresholdError.error}
          onFocus={() => setThresholdError({ helperText: "", error: false })}
          onBlur={() =>
            setThresholdError({
              helperText: "Threshold is required",
              error: formData.threshold === "",
            })
          }
          helperText={thresholdError.error ? thresholdError.helperText : ""}
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
          Submit
        </Button>
      </div>
      {/*<ToastContainer />*/}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
