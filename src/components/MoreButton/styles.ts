import styled from "styled-components";

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surface.tertiary};
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: 0 2px 5px ${({ theme }) => theme.colors.shadow.light};
  z-index: 1000;
  min-width: 150px;
`;

export const MenuItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface.secondary};
  }
`;
