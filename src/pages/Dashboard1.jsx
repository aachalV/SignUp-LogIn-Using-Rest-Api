import { Component, createRef } from "react";
import { connect } from "react-redux";
import auth from "../helper/auth";
import { userDashboardActionGenerator } from "../redux/actions/userAction.generator";
import JoditEditor from "jodit-react";

const JoditEditorConfig = {
  zIndex: 0,
  readonly: false,
  activeButtonsInReadOnly: ["source", "fullsize", "print", "about", "dots"],
  toolbarButtonSize: "middle",
  theme: "default",
  saveModeInCookie: false,
  spellcheck: true,
  editorCssClass: false,
  triggerChangeEvent: true,
  width: "auto",
  height: "auto",
  minHeight: 100,
  direction: "",
  language: "auto",
  debugLanguage: false,
  i18n: "en",
  tabIndex: -1,
  toolbar: true,
  enter: "P",
  // defaultMode: Jodit.MODE_WYSIWYG,
  useSplitMode: false,
  colors: {
    greyscale: [
      "#000000",
      "#434343",
      "#666666",
      "#999999",
      "#B7B7B7",
      "#CCCCCC",
      "#D9D9D9",
      "#EFEFEF",
      "#F3F3F3",
      "#FFFFFF",
    ],
    palette: [
      "#980000",
      "#FF0000",
      "#FF9900",
      "#FFFF00",
      "#00F0F0",
      "#00FFFF",
      "#4A86E8",
      "#0000FF",
      "#9900FF",
      "#FF00FF",
    ],
    full: [
      "#E6B8AF",
      "#F4CCCC",
      "#FCE5CD",
      "#FFF2CC",
      "#D9EAD3",
      "#D0E0E3",
      "#C9DAF8",
      "#CFE2F3",
      "#D9D2E9",
      "#EAD1DC",
      "#DD7E6B",
      "#EA9999",
      "#F9CB9C",
      "#FFE599",
      "#B6D7A8",
      "#A2C4C9",
      "#A4C2F4",
      "#9FC5E8",
      "#B4A7D6",
      "#D5A6BD",
      "#CC4125",
      "#E06666",
      "#F6B26B",
      "#FFD966",
      "#93C47D",
      "#76A5AF",
      "#6D9EEB",
      "#6FA8DC",
      "#8E7CC3",
      "#C27BA0",
      "#A61C00",
      "#CC0000",
      "#E69138",
      "#F1C232",
      "#6AA84F",
      "#45818E",
      "#3C78D8",
      "#3D85C6",
      "#674EA7",
      "#A64D79",
      "#85200C",
      "#990000",
      "#B45F06",
      "#BF9000",
      "#38761D",
      "#134F5C",
      "#1155CC",
      "#0B5394",
      "#351C75",
      "#733554",
      "#5B0F00",
      "#660000",
      "#783F04",
      "#7F6000",
      "#274E13",
      "#0C343D",
      "#1C4587",
      "#073763",
      "#20124D",
      "#4C1130",
    ],
  },
  colorPickerDefaultTab: "background",
  imageDefaultWidth: 300,
  removeButtons: [],
  disablePlugins: [],
  extraButtons: [],
  sizeLG: 900,
  sizeMD: 700,
  sizeSM: 400,
  sizeSM: 400,
  buttons: [
    "source",
    "|",
    "bold",
    "strikethrough",
    "underline",
    "italic",
    "|",
    "ul",
    "ol",
    "|",
    "outdent",
    "indent",
    "|",
    "font",
    "fontsize",
    "brush",
    "paragraph",
    "|",
    "image",
    "video",
    "table",
    "link",
    "|",
    "align",
    "undo",
    "redo",
    "|",
    "hr",
    "eraser",
    "copyformat",
    "|",
    "symbol",
    "fullsize",
    "print",
    "about",
  ],
  buttonsXS: [
    "bold",
    "image",
    "|",
    "brush",
    "paragraph",
    "|",
    "align",
    "|",
    "undo",
    "redo",
    "|",
    "eraser",
    "dots",
  ],
  events: {},
  textIcons: false,
};
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      theme: "dark",
    };
    this.editor = createRef();
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme = () => {
    if (this.state.theme === "dark") {
      this.setState({ theme: "default" });
    } else {
      this.setState({ theme: "dark" });
    }
  };

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
  // handleChange = (value) => {
  //   this.setState({ content: value });
  // };

  render() {
    // const handleChange = (value = {}) => {
    //   console.log(value);
    //   this.setState({ content: value });
    // };
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>Welcome</h2>
        <h3>{this.props.user.name}</h3>
        <button onClick={this.logoutUser}>Logout</button>
        <h2>
          Theme :{" "}
          <span>
            <button onClick={this.toggleTheme}>Toggle Theme</button>
          </span>
        </h2>
        <JoditEditor
          ref={this.editor}
          value={this.state.content}
          config={{
            readonly: false,
            enableDragAndDropFileToEditor: true,
            uploader: { insertImageAsBase64URI: true },
            //useSplitMode: true,
            spellcheck: true,
            theme: this.state.theme,
          }}
          tabIndex={1} // tabIndex of textarea
          // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          //onChange={(data) => this.setState({ content: data })}
          onChange={(data, nextData) => console.log(data)}
          //onChange={this.handleChange}
        />
        {/* <div dangerouslySetInnerHTML={{ __html: this.state.content }} /> */}
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
