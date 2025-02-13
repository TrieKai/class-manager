import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  width: 100%;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  h2 {
    margin: 0 0 8px 0;
    font-size: 24px;
  }

  div {
    color: #666;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #666;
  border-radius: 4px;

  &:hover {
    background: #f0f0f0;
  }
`;

export const StudentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
`;

export const StudentCard = styled.div<{ isGuest: boolean }>`
  position: relative;
  padding: 16px;
  background: ${(props) => (props.isGuest ? "#f5f5f5" : "white")};
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f5f5f5;
  padding: 4px 12px;
  border-radius: 20px;
`;

export const CountButton = styled.button<{ disabled?: boolean }>`
  background: ${(props) => (props.disabled ? "#ddd" : "white")};
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.disabled ? "#999" : "#333")};

  &:hover:not(:disabled) {
    background: #f0f0f0;
  }
`;

export const QRCodeContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;
