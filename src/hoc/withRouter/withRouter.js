import { useMatch } from "react-router-dom";

const withRouter = (Component) => (props) => {
  const match = useMatch("/profile/:userId/");

  return <Component {...props} match={match.params} />;
};

export default withRouter();
