import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Student } from "./pages/Student";
import { QRCode } from "./pages/QRCode";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f5f5;
    background-image: url("/background.svg");
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
  display: flex;
  gap: 12px;
  padding: 12px;
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const App: FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContainer>
        <QRCode />
        <Student />
      </AppContainer>
    </Provider>
  );
};

export default App;
