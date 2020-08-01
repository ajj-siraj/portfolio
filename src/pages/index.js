//Main modules
import React, { useEffect } from "react";
import { Link } from "gatsby";
import { Nav } from "react-bootstrap";
import Parse from "parse";
import ScrollLock from "react-scrolllock";

//redux
import { connect } from "react-redux";
import * as Actions from "../state/actions";

//components
import Main from "../components/Main";
import Loading from "../components/Loading";

//stylesheets
import "bootstrap/dist/css/bootstrap.min.css";

//redux unused for now but I'll leave it JIC I need it in the future
const mapStateToProps = state => {
  console.log("STATE: ", state);
  return {
    loading: state.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingData: () => dispatch(Actions.fetchingData()),
    fetchingDone: () => dispatch(Actions.fetchingDone()),
  };
};

const IndexPage = props => {
  useEffect(() => {
    Parse.serverURL = "https://parseapi.back4app.com";
    Parse.initialize(process.env.b4aID, process.env.apiKey);
  });
  return (
    <div>
      {/* {props.loading ? <Loading /> : null} */}
      <Main {...props} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
