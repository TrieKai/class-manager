import styled from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(246, 246, 246);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: #666;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

export const ModalContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;
