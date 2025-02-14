import styled from "styled-components";

export const PageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.div`
  h1 {
    margin: 0 0 8px 0;
    font-size: 28px;
    font-weight: 600;
  }

  div {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const Content = styled.div`
  flex: 1;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
