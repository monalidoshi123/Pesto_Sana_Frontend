import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    maxWidth: "960px",
    textAlign: "center",
  },
}));

export default useStyles;
