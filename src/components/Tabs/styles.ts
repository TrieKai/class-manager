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
  background: ${(props) => (props.active ? "white" : "rgb(195, 199, 200)")};
  color: ${(props) => (props.active ? "rgb(11, 140, 240)" : "black")};
  font-weight: 600;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
