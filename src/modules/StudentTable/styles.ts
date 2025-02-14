import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StudentRow = styled.div<{ isGuest: boolean }>`
  display: grid;
  gap: 16px;
  align-items: center;
  padding: 12px;
  background: ${(props) => (props.isGuest ? "#f5f5f5" : "white")};
  border: 1px solid #ddd;
  border-radius: 8px;
  opacity: ${(props) => (props.isGuest ? 0.7 : 1)};
`;

export const NameCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

export const PositionCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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

export const StudentTableListViewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;
