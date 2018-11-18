import styled from "styled-components";
import React from "react";

const Error = props => (
  <StyledError>
    <span>Error: {JSON.stringify(props.error)}</span>
  </StyledError>
);

const StyledError = styled.div`
  margin: 0 auto;
`;

export default Error;
