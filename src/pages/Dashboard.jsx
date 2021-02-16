import { Component } from "react";
import { connect } from "react-redux";
import auth from "../helper/auth";
import { userDashboardActionGenerator } from "../redux/actions/userAction.generator";

class Dashboard extends Component {
  logoutUser = () => {
    auth.logout(() => {
      this.props.history.push("/login");
    });
  };

  componentDidMount() {
    if (Object.keys(this.props.user === 0)) {
      this.props.setUserDetails();
    }
  }
  // componentDidMount() {
  //   const token = getCookie("token");

  //   api({
  //     url: config.GET_USER_DETAILS,
  //     headers: { Authorization: `Bearer ${token}` },
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       let result = response.data;
  //       if (result.success) {
  //         {
  //           this.props.setUserDetails(result.user);
  //         }
  //       } else {
  //         console.log("FAILED");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>Welcome</h2>
        <h3>{this.props.user.name}</h3>
        <button onClick={this.logoutUser}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserDetails: () => dispatch(userDashboardActionGenerator()),
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUserDetails: (payload) => {
//       console.log(payload);
//       return dispatch(
//         userActionObjectGenerator(userActionTypes.SET_USER, payload)
//       );
//     },
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
