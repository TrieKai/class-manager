import styled from "styled-components";

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #333;
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

export const ModalContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;
