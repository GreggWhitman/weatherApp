import styled from "styled-components";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Icon extends Component {
  static defaultProps = {
    icon: "mdi mdi-home"
  };

  static propTypes = {
    icon: PropTypes.string
  };

  render() {
    return <StyledIcon className={this.props.icon} />;
  }
}

export default Icon;

const StyledIcon = styled.i`
  line-height: 1.4;
  font-size: 2em;
`;
