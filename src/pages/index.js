//Main modules
import React from "react"
import { Link } from "gatsby"
import {Nav} from "react-bootstrap";

//components
import Main from "./Main";

//stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';

class IndexPage extends React.Component {

  render() {
    return (
      <Main />
      
    )
  }
}

export default IndexPage


{/* <Layout>
  <SEO title="Home" />
  <h1>Hi people</h1>
  <p>Welcome to your new Gatsby site.</p>
  <p>Now go build something great.</p>
  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
  </div>
  <Link to="/page-2/">Go to page 2</Link> <br />
  <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
</Layout> */}