import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import { Check, ChevronLeft, Copy } from "lucide-react";
import styled from "styled-components";
import { useGetClassInfoQuery } from "../../services/api";
import {
  registerModal,
  unregisterModal,
  toggleModalVisibility,
  selectModalVisibility,
} from "../../store/modalSlice";
import { Modal } from "../../components/Modal";

const MODAL_ID = "qrcode-modal";

const QRCodeModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const BackButton = styled.button`
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

const InfoContainer = styled.div`
  margin: 20px 0;
  padding: 15px;
  display: flex;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  color: #6c757d;
  border-radius: 4px;

  &:hover {
    background: #e9ecef;
  }

  span {
    font-size: 0.875rem;
    color: #28a745;
  }
`;

const QRCodeContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

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
    navigator.clipboard.writeText("https://www.classswift.viewsonic.io/");
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
      <Modal
        title={
          <BackButton>
            <ChevronLeft size={24} />
            Back to Class List
          </BackButton>
        }
        isOpen={isVisible}
        onClose={handleClose}
      >
        Join Class
        <InfoContainer>
          <span>ID: {classInfo.id}</span>
          <IconButton onClick={handleCopyId}>
            {copiedId ? <Check size={16} /> : <Copy size={16} />}
          </IconButton>
          <span>Link</span>
          <IconButton onClick={handleCopyLink}>
            {copiedLink ? <Check size={16} /> : <Copy size={16} />}
          </IconButton>
        </InfoContainer>
        <QRCodeContainer>
          <QRCodeCanvas
            value="https://www.classswift.viewsonic.io/"
            size={300}
          />
        </QRCodeContainer>
      </Modal>
    </QRCodeModalContainer>
  );
};

export default QRCodeModal;
