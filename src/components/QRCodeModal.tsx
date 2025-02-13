import { FC, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Copy, Link } from "lucide-react";
import { useGetClassInfoQuery } from "../services/api";
import {
  Modal,
  Header,
  QRCodeContainer,
  InfoContainer,
  InfoItem,
  IconButton,
  ModalContainer,
} from "./styles";

const QRCodeModal: FC = () => {
  const { data: classInfo, isLoading } = useGetClassInfoQuery();
  const [copiedId, setCopiedId] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyId = (): void => {
    if (classInfo) {
      navigator.clipboard.writeText(classInfo.id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleCopyLink = (): void => {
    navigator.clipboard.writeText("https://www.classswift.viewsonic.io/");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (isLoading) {
    return <Modal>Loading...</Modal>;
  }

  if (!classInfo) {
    return <Modal>Error loading class info</Modal>;
  }

  return (
    <ModalContainer>
      <Modal>
        <Header>
          <div>
            <h2>{classInfo.name}</h2>
            <p>
              {classInfo.currentCount}/{classInfo.maxCount}
            </p>
          </div>
        </Header>

        <InfoContainer>
          <InfoItem>
            <span>Class ID: {classInfo.id}</span>
            <IconButton onClick={handleCopyId}>
              <Copy size={16} />
              {copiedId && <span>Copied!</span>}
            </IconButton>
          </InfoItem>
          <InfoItem>
            <span>Class Link</span>
            <IconButton onClick={handleCopyLink}>
              <Link size={16} />
              {copiedLink && <span>Copied!</span>}
            </IconButton>
          </InfoItem>
        </InfoContainer>

        <QRCodeContainer>
          <QRCodeCanvas
            value="https://www.classswift.viewsonic.io/"
            size={300}
          />
        </QRCodeContainer>
      </Modal>
    </ModalContainer>
  );
};

export default QRCodeModal;
