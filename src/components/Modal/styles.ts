import styled from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.surface.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.shadow.light};
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surface.tertiary};
  }
`;

export const ModalContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;
