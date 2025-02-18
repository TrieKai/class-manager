import { FC } from "react";
import { Provider } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import { store } from "./store";
import { Student } from "./pages/Student";
import { QRCode } from "./pages/QRCode";
import { device } from "./styles/breakpoints";
import { ThemeProvider } from "./styles/ThemeProvider";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url("/background.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

const AppContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
  padding: 12px;
  width: 100%;
  height: 100%;
  ${device.tabletUp} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyle />
        <AppContainer>
          <QRCode />
          <Student />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
