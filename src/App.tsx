import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStudents } from "./store/studentSlice";
import { fetchStudents } from "./utils/api";
import ClassModal from "./components/ClassModal";
import { createGlobalStyle } from "styled-components";
import { AppContainer, ModalContainer } from "./components/styles";
import { QRCodeCanvas } from "qrcode.react";

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

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const students = await fetchStudents();
      dispatch(setStudents(students));
    };
    loadData();
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ModalContainer>
          <QRCodeCanvas
            value="https://www.classswift.viewsonic.io/"
            size={300}
          />
        </ModalContainer>
        <ModalContainer>
          <ClassModal />
        </ModalContainer>
      </AppContainer>
    </>
  );
};

export default App;
