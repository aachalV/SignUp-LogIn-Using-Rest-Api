import React, { useEffect } from "react";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { closeNotification } from "../redux/actions/userAction.generator";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function CustomizedSnackbars(props) {
  console.log("Customized", props);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState("");
  useEffect(() => {
    if (Object.keys(props !== 0)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [props]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    props.closeNotification();
  };
  return (
    <div className={classes.root}>
      {props.severity ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={props.severity}>
            {props.msg ? props.msg : props.error.message}
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}

      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("Snackbar", state.notifyReducer.msg);
  return {
    loading: state.notifyReducer.loading,
    error: state.notifyReducer.error,
    msg: state.notifyReducer.msg,
    severity: state.notifyReducer.severity,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    closeNotification: () => dispatch(closeNotification()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizedSnackbars);
