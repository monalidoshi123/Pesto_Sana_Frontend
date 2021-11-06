import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#5F2CD0",
    },
  },
  formControl: {
    width: "25%",
    minWidth: 120,
    textAlign: "left",
  },
}));

export default useStyles;
