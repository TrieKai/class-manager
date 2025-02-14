import { FC } from "react";
import QRCodeModal from "@/pages/QRCode/QRCodeModal";
import { PageContainer } from "./styles";

export const QRCode: FC = () => {
  return (
    <PageContainer>
      <QRCodeModal />
    </PageContainer>
  );
};
