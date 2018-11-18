import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "../../components";

class MiniWeather extends Component {
  static defaultProps = {
    title: "",
    weather: "",
    theTemp: "",
    minTemp: "",
    maxTemp: "",
    icon: ""
  };

  static propTypes = {
    title: PropTypes.string,
    weather: PropTypes.string,
    theTemp: PropTypes.string,
    minTemp: PropTypes.string,
    maxTemp: PropTypes.string,
    icon: PropTypes.string
  };

  render() {
    return (
      <StyledMiniWeather>
        <Title>{this.props.title}</Title>
        <Icon icon={this.props.icon} />
        <div>{this.props.weather} </div>
        <TheTemp>{this.props.theTemp} </TheTemp>
        <div>{this.props.maxTemp} </div>
        <div>{this.props.minTemp} </div>
      </StyledMiniWeather>
    );
  }
}

export default MiniWeather;

const TheTemp = styled.div`
  font-size: 1.2em;
`;

const StyledMiniWeather = styled.div`
  margin: 0.5rem;
`;

const Title = styled.header`
  font-size: 1.2em;
  white-space: nowrap;
`;
