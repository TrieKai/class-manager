import styled from "styled-components";
import { device } from "../../styles/breakpoints";

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
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: min-content;
  gap: 12px;
  flex-grow: 1;
  padding: 12px;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: ${({ theme }) =>
    `${theme.colors.shadow.medium} 0px 0px 10px 0px`};

  ${device.tabletUp} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${device.laptopUp} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${device.desktopUp} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${device.desktopLUp} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
export const TableViewStudentCard = styled.div<{ disabled: boolean }>`
  display: grid;
  gap: 16px;
  align-items: center;
  height: fit-content;
  background: "white";
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.text.disabled : "inherit"};
  border: ${({ theme, disabled }) =>
    `1px solid ${disabled ? theme.colors.border : theme.colors.primary}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  overflow: hidden;
`;
export const TableViewCardPosition = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.text.disabled : theme.colors.primary};
  color: white;
`;
export const TableViewCardName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;
export const TableViewCardCounter = styled.div<{ disabled?: boolean }>`
  display: flex;
  padding: 4px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  border-top: 1px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.text.disabled : theme.colors.primary};
`;
export const TableViewCardCountButton = styled.button<{
  color: string;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, disabled, color }) =>
    disabled ? theme.colors.text.disabled : color};
  border: none;
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
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
  box-shadow: ${({ theme }) =>
    `${theme.colors.shadow.medium} 0px 0px 10px 0px`};
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
  box-shadow: ${({ theme }) =>
    `${theme.colors.shadow.medium} 0px 0px 10px 0px`};
`;
export const GroupViewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  padding: 16px;
`;
export const GroupViewCard = styled.div<{ disabled: boolean }>`
  position: relative;
  padding: 16px;
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.surface.secondary : theme.colors.surface.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
