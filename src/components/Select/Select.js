import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@material-ui/core/TextField";
import useStyles from "./Select.styles";

export default function SelectField(props) {
  const classes = useStyles();
  return (
    <Box>
      <FormControl variant="standard" className={classes.formControl}>
        <TextField
          id="demo-simple-select"
          label={props.label}
          onChange={props.handleChange}
          value={props.value}
          className={classes.root}
          select
        >
          <MenuItem value={"Beijing"}>Beijing</MenuItem>
          <MenuItem value={"London"}>London</MenuItem>
          <MenuItem value={"Bankok"}>Bankok</MenuItem>
          <MenuItem value={"Paris"}>Paris</MenuItem>
          <MenuItem value={"Shanghai"}>Shanghai</MenuItem>
        </TextField>
      </FormControl>
    </Box>
  );
}
