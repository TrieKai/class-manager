import { FC } from "react";
import ClassModal from "./components/ClassModal";
import QRCodeModal from "./components/QRCodeModal";
import { createGlobalStyle } from "styled-components";
import { AppContainer } from "./components/styles";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f5f5;
    background-image: url("/background.svg");
  }

  * {
    box-sizing: border-box;
  }
`;

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <QRCodeModal />
        <ClassModal />
      </AppContainer>
    </>
  );
};

export default App;
