import React, { Component } from "react";
import "../styles/ResyForm.css";

class ResyForm extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    return <div className="resy-form"></div>;
  }
}

export default ResyForm;


