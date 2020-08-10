//Main modules
import React from "react";
import Helmet from "react-helmet";

//components
import Main from "../components/Main";

//stylesheets
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = props => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Siraj - A Portfolio</title>
        
      </Helmet>
      <Main {...props} />
    </div>
  );
};

export default IndexPage;
