import styled from "styled-components";

export const PageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-weight: 600;
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 24px;
`;

export const ClassInfo = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 600;
`;
