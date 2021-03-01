import { createMuiTheme } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/purple";
const theme = createMuiTheme({
  // root: {
  //   height: "100vh",
  // },
  palette: {
    // primary: {
    //   main: "#42a5f5",
    // },
    // secondary: {
    //   main: "#f50057",
    // },
    textContrast: {
      main: "#ffffff",
    },
    background: {
      default: "#42a5f5",
    },
  },

  // image: {
  //   backgroundImage:
  //     "url(https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)",
  //   // "url(https://cdn.dribbble.com/users/720428/screenshots/6546803/isometric.png?compress=1&resize=800x600)",

  //   backgroundRepeat: "no-repeat",
  //   backgroundColor:
  //     theme.palette.type === "light"
  //       ? theme.palette.grey[50]
  //       : theme.palette.grey[900],
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // },
  // paper: {
  //   margin: theme.spacing(8, 6),
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: secondary.main,
  // },
  // form: {
  //   width: "100%", // Fix IE 11 issue.
  //   marginTop: theme.spacing(1),
  // },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
});

export default theme;
