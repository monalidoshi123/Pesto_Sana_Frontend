import React from "react";
import { TextField } from "@material-ui/core";
import useStyles from "./Textfiesld.styles";

export default function Textfield(props) {
  const classes = useStyles();
  switch (props.type) {
    case "password":
      return (
        <TextField
          required
          type="password"
          className={
            props.field === "form" ? classes.formwidthStyle : classes.widthStyle
          }
          id="outlined-password-input"
          label={props.label}
          autoComplete="current-password"
          onChange={props.handleChange}
          disabled={props.disabled}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          error={props.error}
          helperText={props.helperText}
        />
      );
    default:
      return (
        <TextField
          required
          className={
            props.field === "form" ? classes.formwidthStyle : classes.widthStyle
          }
          id="outlined-required"
          label={props.label}
          defaultValue={props.value}
          onChange={props.handleChange}
          disabled={props.disabled}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          error={props.error}
          helperText={props.helperText}
        />
      );
  }
}
