import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  widthStyle: {
    width: "70%",
    [theme.breakpoints.up("sm")]: {
      width: "25%",
    },
  },
  formwidthStyle: {
    width: "70%",
  },
}));

export default useStyles;
