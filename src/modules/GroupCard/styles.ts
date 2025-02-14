import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
`;

export const CardContainer = styled.div<{ isGuest: boolean }>`
  padding: 16px;
  background: ${(props) => (props.isGuest ? "#f5f5f5" : "white")};
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  opacity: ${(props) => (props.isGuest ? 0.7 : 1)};
`;

export const StudentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  div:first-child {
    font-weight: 500;
  }

  div:last-child {
    color: #666;
    font-size: 14px;
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
