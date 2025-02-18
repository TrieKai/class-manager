import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 1;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 12px 24px;
  border: none;
  background: ${({ theme, active }) => active ? theme.colors.surface.primary : theme.colors.text.disabled};
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.text.primary};
  font-weight: 600;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.sm};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
