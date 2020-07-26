//Main modules
import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"

//redux
import {connect} from 'react-redux';
import * as Actions from "../state/actions"

//components
import Main from "../components/Main"

//stylesheets
import "bootstrap/dist/css/bootstrap.min.css"

//redux unused for now but I'll leave it JIC I need it in the future
const mapStateToProps = state => {
  return {
    targetElement: state.targetElement,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleNavTheme: element => dispatch(Actions.toggleNavTheme(element)),
  }
}

const IndexPage = props => {
  return (<Main {...props} />)
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
