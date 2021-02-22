import { Component } from "react";
import { connect } from "react-redux";
import auth from "../helper/auth";
import { userDashboardActionGenerator } from "../redux/actions/userAction.generator";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(content) {
    console.log(content); //Get Content Inside Editor
    this.setState({ content: content });
    console.log("SetState", this.state.content);
  }
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
  render() {
    console.log("State", this.state.content);
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>Welcome</h2>
        <h3>{this.props.user.name}</h3>
        <button onClick={this.logoutUser}>Logout</button>
        <SunEditor
          setOptions={{
            height: 200,
            buttonList: buttonList.complex, // Or Array of button list, eg. [['font', 'align'], ['image']]
            // Other option
          }}
          onChange={this.handleChange}
        />
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
