import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
`;

export const CardContainer = styled.div<{ disabled: boolean }>`
  padding: 16px;
  background: ${({ theme, disabled }) => disabled ? theme.colors.surface.secondary : theme.colors.surface.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  gap: 12px;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;

export const StudentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  div:first-child {
    font-weight: 500;
  }

  div:last-child {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors.surface.secondary};
  padding: 4px 12px;
  border-radius: 20px;
`;

export const CountButton = styled.button<{ disabled?: boolean }>`
  background: ${({ theme, disabled }) => disabled ? theme.colors.surface.disabled : theme.colors.surface.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${({ theme, disabled }) => disabled ? theme.colors.text.disabled : theme.colors.text.primary};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.surface.tertiary};
  }
`;
