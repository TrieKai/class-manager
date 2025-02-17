import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import { Check, ChevronLeft, Copy } from "lucide-react";
import { useGetClassInfoQuery } from "../../services/api";
import {
  registerModal,
  unregisterModal,
  toggleModalVisibility,
  selectModalVisibility,
} from "../../store/modalSlice";
import { Modal } from "../../components/Modal";
import {
  BackButton,
  Content,
  IconButton,
  Info,
  InfoContainer,
  QRCodeContainer,
  QRCodeModalContainer,
  Version,
} from "./styles";

const MODAL_ID = "qrcode-modal";

const URL = "https://www.classswift.viewsonic.io";

const QRCodeModal: FC = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectModalVisibility(MODAL_ID));
  const { data: classInfo, isLoading } = useGetClassInfoQuery();
  const [copiedId, setCopiedId] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleClose = (): void => {
    dispatch(toggleModalVisibility({ id: MODAL_ID, visible: false }));
  };

  const handleCopyId = (): void => {
    if (classInfo) {
      navigator.clipboard.writeText(classInfo.id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleCopyLink = (): void => {
    navigator.clipboard.writeText(URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  useEffect(() => {
    dispatch(registerModal({ id: MODAL_ID, visible: true }));
    return () => {
      dispatch(unregisterModal({ modalId: MODAL_ID }));
    };
  }, [dispatch]);

  if (!isVisible) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!classInfo) {
    return <div>Error loading class info</div>;
  }

  return (
    <QRCodeModalContainer>
      <Modal isOpen={isVisible} onClose={handleClose}>
        <Content>
          <BackButton>
            <ChevronLeft size={24} />
            Back to Class List
          </BackButton>
          <InfoContainer>
            <Info>Join {classInfo.name}</Info>
            <Info>
              <span>ID: {classInfo.id}</span>
              <IconButton onClick={handleCopyId}>
                {copiedId ? <Check size={16} /> : <Copy size={16} />}
              </IconButton>
              <span>Link</span>
              <IconButton onClick={handleCopyLink}>
                {copiedLink ? <Check size={16} /> : <Copy size={16} />}
              </IconButton>
            </Info>
          </InfoContainer>
          <QRCodeContainer>
            <QRCodeCanvas
              value={URL}
              style={{ width: "100%", height: "auto" }}
            />
          </QRCodeContainer>
          <Version>Version 1.0.0</Version>
        </Content>
      </Modal>
    </QRCodeModalContainer>
  );
};

export default QRCodeModal;
