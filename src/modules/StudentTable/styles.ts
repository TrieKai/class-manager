import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 24px;
`;

/* TableView */
export const TableListViewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: min-content;
  gap: 12px;
  flex-grow: 1;
  padding: 12px;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
`;
export const TableViewStudentCard = styled.div<{ isGuest: boolean }>`
  display: grid;
  gap: 16px;
  align-items: center;
  height: fit-content;
  background: ${(props) => (props.isGuest ? "#f5f5f5" : "white")};
  color: ${(props) => (props.isGuest ? "#666" : "inherit")};
  border: ${(props) =>
    props.isGuest ? "1px solid #ddd" : "1px solid rgb(11, 140, 240)"};
  border-radius: 8px;
  opacity: ${(props) => (props.isGuest ? 0.7 : 1)};
  overflow: hidden;
`;
export const TableViewCardPosition = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: ${(props) =>
    props.disabled ? "#ddd" : "rgb(11, 140, 240)"};
  color: white;
`;
export const TableViewCardName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;
export const TableViewCardCounter = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;
export const TableViewCardCountButton = styled.button<{
  color: string;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.disabled ? "#ddd" : props.color)};
  border: none;
  color: white;
  border-radius: 2px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

/* GroupView */
export const GroupViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-auto-rows: min-content;
  gap: 20px;
  flex-grow: 1;
  padding: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const GroupViewTitle = styled.h3`
  margin: 0;
  padding: 10px 0;
`;
export const GroupViewGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
`;
export const GroupViewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  padding: 16px;
`;
export const GroupViewCard = styled.div<{ isGuest: boolean }>`
  position: relative;
  padding: 16px;
  background: ${(props) => (props.isGuest ? "#f5f5f5" : "white")};
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
