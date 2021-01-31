import auth from "../helper/auth";
export default function Dashboard(props) {
  const logoutUser = () => {
    auth.logout(() => {
      props.history.push("/login");
    });
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
