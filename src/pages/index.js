//Main modules
import React, { useEffect } from "react";
import { Link } from "gatsby";
import { Nav } from "react-bootstrap";
import Parse from "parse";

//redux
import { connect } from "react-redux";
import * as Actions from "../state/actions";

//components
import Main from "../components/Main";

//stylesheets
import "bootstrap/dist/css/bootstrap.min.css";

//redux unused for now but I'll leave it JIC I need it in the future
const mapStateToProps = state => {
  return {
    targetElement: state.targetElement,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleNavTheme: element => dispatch(Actions.toggleNavTheme(element)),
  };
};

const IndexPage = props => {
  useEffect(() => {
    Parse.serverURL = "https://parseapi.back4app.com";
    Parse.initialize(process.env.b4aID, process.env.apiKey);
  });
  return (
    <div>
      <Main {...props} />
      <script src="node_modules/parse/dist/parse.min.js"></script>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
