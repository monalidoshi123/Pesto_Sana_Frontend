import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  DialogContent,
  Box,
  Dialog,
} from "@material-ui/core";
import Button from "../Button/Button";
import useStyles from "./Header.styles";
import { Close } from "@material-ui/icons";
import Login from "../Auth/Login";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

const Header = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const LoginPopup = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <header className={classes.headerstyles}>
        <AppBar position="static">
          <Toolbar className={classes.toolbarcontent}>
            <div>
              {!props.auth.isAuthenticated ? (
                <>
                  <Button text="Home" component={RouterLink} to="/" />
                  <Button text="Login" handleClick={LoginPopup} />
                </>
              ) : (
                <>
                  <Button text={"Welcome, " + props.auth.firstName} />

                  <Button text="Logout" handleClick={props.logout} />
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </header>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth="lg"
          classes={{ paper: classes.paper }}
        >
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}></Box>
            <Box>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
          </Box>
          <DialogContent style={{ padding: "0px" }}>
            <Login />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

/*Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  firstName: state.auth.firstName,
});

export default connect(mapStateToProps, { logout })(Header);*/

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    firstName: state.auth.firstName,
  };
};

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
