import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 5px 0 0;
    color: #666;
  }
`;

export const InfoContainer = styled.div`
  margin: 20px 0;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #e9ecef;
  }

  span {
    color: #495057;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  color: #6c757d;
  border-radius: 4px;

  &:hover {
    background: #e9ecef;
  }

  span {
    font-size: 0.875rem;
    color: #28a745;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  color: #666;
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border: none;
  background: ${(props) => (props.active ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "black")};
  border-radius: 4px;
  cursor: pointer;
`;

export const StudentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

export const StudentCard = styled.div<{ isGuest?: boolean }>`
  background: ${(props) => (props.isGuest ? "#f0f0f0" : "white")};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  position: relative;
  opacity: ${(props) => (props.isGuest ? "0.7" : "1")};
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CountButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 2px 6px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #f0f0f0;
  }

  &:not(:disabled):hover {
    background: #f0f0f0;
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const QRCodeContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const CopyButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #0056b3;
  }
`;
