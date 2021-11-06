import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textDetail: {
    display: "inline-flex",
    margin: "0px",
  },
  cardStyle: {
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
    width: "100%",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      width: "25%",
    },
  },
  divStyle: {
    justifyContent: "center",
  },
  cardText: {
    flexGrow: 1,
    textAlign: "center",
  },
  higherStyle: {
    color: "red",
  },
  lowerStyle: {
    color: "green",
  },
}));

export default useStyles;
