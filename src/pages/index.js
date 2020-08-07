//Main modules
import React, {useEffect} from "react";
import {gsap} from "gsap";

//redux
import { connect } from "react-redux";
import * as Actions from "../state/actions";

//components
import Main from "../components/Main";

//stylesheets
import "bootstrap/dist/css/bootstrap.min.css";

//for redux
const mapStateToProps = state => {
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
    console.log(document.childNodes[1]);
    if(document) gsap.to(document.childNodes[1], {opacity: 1});
  })
  return (
    <div>
      <Main {...props} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
// export default IndexPage
