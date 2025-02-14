import { FC } from "react";
import StudentModal from "./StudentModal";
import { PageContainer } from "./styles";

export const Student: FC = () => {
  return (
    <PageContainer>
      <StudentModal />
    </PageContainer>
  );
};
