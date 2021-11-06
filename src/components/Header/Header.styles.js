import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "50%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25%",
    },
  },
  headerstyles: {
    width: "100%",
  },
  toolbarcontent: {
    justifyContent: "right",
  },
}));

export default useStyles;
