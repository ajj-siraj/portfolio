//Main modules
import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"

//redux
import {connect} from 'react-redux';
import * as Actions from "../state/actions"

//components
import Main from "./Main"

//stylesheets
import "bootstrap/dist/css/bootstrap.min.css"

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
  console.log("PROPS in IndexPage: ", props)
  return (<Main {...props} />)
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
