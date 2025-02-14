import styled from "styled-components";

export const PageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 32px;

  h1 {
    margin: 0 0 8px 0;
    font-size: 28px;
    font-weight: 600;
  }

  div {
    color: #666;
    font-size: 16px;
  }
`;

export const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;

  canvas {
    padding: 16px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-weight: 500;
      color: #666;
    }

    div {
      padding: 12px;
      background: #f8f9fa;
      border-radius: 4px;
      font-family: monospace;
      font-size: 14px;
    }
  }
`;
