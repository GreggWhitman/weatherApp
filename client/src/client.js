import React from "react";
import styled from "styled-components";
import { Weather } from "./widgets";

const Client = props => (
  <StyledApp>
    <Weather />
  </StyledApp>
);

export default Client;

const StyledApp = styled.div`
  height: 100vh;
  font-family: 'Roboto';
  font-size: .8em;
  line-height: 1.4;
  text-align: center;
  background-color: ${e => e.theme.color.black};
  color: ${e => e.theme.color.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
`;
