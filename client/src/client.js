import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";

import Weather from "./weather/weather.js";

function Client () {
  return (
    <ThemeProvider theme={theme}>
        <StyledApp>
          <Weather />
        </StyledApp>
    </ThemeProvider>
  );
};

export default Client;

const StyledApp = styled.div`
  overflow: hidden;
  height: 100vh;
  font-family: 'Roboto';
  font-size: .8em;
  line-height: 1.4;
  text-align: center;
  background-color: ${e => e.theme.color.background};
  color: ${e => e.theme.color.text};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
}
`;
