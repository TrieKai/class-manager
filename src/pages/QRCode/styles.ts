import styled from "styled-components";

export const PageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const QRCodeModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 24px;
`;

export const BackButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  border: none;
  background: none;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 600;
  padding: 0px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  font-weight: 600;
`;

export const Info = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgb(11, 140, 240);
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  color: white;
  border-radius: 4px;
`;

export const QRCodeContainer = styled.div`
  padding: 20px;
  background-color: white;
  text-align: center;
`;

export const Version = styled.div`
  display: flex;
  justify-content: center;
`;
