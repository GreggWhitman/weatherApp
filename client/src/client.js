import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";

import { Weather } from "./widgets";

const ErrorContext = React.createContext();

const Client = () => {
  const displayError = e => {
    console.error(e);
  };

  return (
    <ThemeProvider theme={theme}>
      <ErrorContext.Provider value={{ displayError }}>
        <StyledApp>
          <Weather />
        </StyledApp>
      </ErrorContext.Provider>
    </ThemeProvider>
  );
};

export default Client;

export { ErrorContext };

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
