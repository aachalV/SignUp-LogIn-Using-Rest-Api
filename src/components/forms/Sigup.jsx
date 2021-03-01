import React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { api } from "../../api/axios";
import auth from "../../helper/auth";
import config from "../../configuration/Configuration";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Aachal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      // "url(https://source.unsplash.com/random)",
      //"url(https://cdn.dribbble.com/users/720428/screenshots/6546803/isometric.png?compress=1&resize=800x600)",
      "url(https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)",

    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(2, 12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState("");

  const handleChange = (event) => {
    const key = event.target.id;
    switch (key) {
      case "name":
        setName(event.target.value);
        break;

      case "email":
        setEmail(event.target.value);
        break;

      case "mobile":
        setMobile(event.target.value);
        break;

      case "password":
        setPassword(event.target.value);
        break;

      case "otp":
        setOtp(event.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Clicked");
    if (verify) {
      try {
        const result = await api({
          url: config.VERIFY_REGISTER_URL,
          body: {
            name: name,
            email: email,
            phone: mobile,
            password: password,
            otpResponse: otp,
          },
          method: "POST",
        });
        console.log("RESULT Signup", result);
        if (result.data.success) {
          console.log(result.data.msg);
          auth.signup(() => {
            props.history.push("/dashboard");
          });
        } else {
          alert(result.data.msg);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Clicked....");
      try {
        const result = await api({
          url: config.SIGNUP_URL,
          body: { name: name, email: email, phone: mobile, password: password },
          method: "POST",
        });
        console.log("RESULT Signup", result);
        if (result.data.success) {
          setVerify(true);
          console.log("Clicked....setVerify");
        } else {
          alert(result.data.msg);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={handleChange}
            />
            <TextField
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="mobile"
              label="Mobile Number"
              type="tel"
              id="mobile"
              autoComplete="mobile"
              value={mobile}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
            {verify ? (
              <TextField
                data-testid="otp-field"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="otp"
                label="OTP"
                type="password"
                id="otp"
                value={otp}
                onChange={handleChange}
              />
            ) : (
              ""
            )}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              data-testid="signup-btn"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SIGN UP
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
