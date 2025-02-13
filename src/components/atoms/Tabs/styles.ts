import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border: none;
  background: ${(props) => (props.active ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "black")};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => (props.active ? "#0056b3" : "#e0e0e0")};
  }
`;

export const TabsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
