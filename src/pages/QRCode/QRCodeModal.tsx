import { FC, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import { Check, ChevronLeft, Copy } from "lucide-react";
import { useGetClassInfoQuery } from "@/services/api";
import {
  registerModal,
  unregisterModal,
  toggleModalVisibility,
  selectModalVisibility,
} from "@/store/modalSlice";
import { Modal } from "@/components/Modal";
import { Skeleton } from "@/components/Skeleton";
import { APP_VERSION } from "@/constants";
import {
  BackButton,
  ClassInfo,
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

  const handleClose = useCallback((): void => {
    dispatch(toggleModalVisibility({ id: MODAL_ID, visible: false }));
  }, [dispatch]);

  const handleCopyId = useCallback((): void => {
    if (classInfo) {
      navigator.clipboard.writeText(classInfo.id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  }, [classInfo]);

  const handleCopyLink = useCallback((): void => {
    navigator.clipboard.writeText(URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  }, []);

  useEffect(() => {
    dispatch(registerModal({ id: MODAL_ID, visible: true }));
    return () => {
      dispatch(unregisterModal({ modalId: MODAL_ID }));
    };
  }, [dispatch]);

  if (!isVisible) {
    return null;
  }

  return (
    <QRCodeModalContainer>
      <Modal isOpen={isVisible} onClose={handleClose}>
        <Content>
          <BackButton>
            <ChevronLeft size={24} />
            Back to Class List
          </BackButton>
          {isLoading || !classInfo ? (
            <>
              <Skeleton width="200px" height="24px" />
              <InfoContainer>
                <Info>
                  <Skeleton width="150px" height="20px" />
                  <IconButton>
                    <Copy size={16} />
                  </IconButton>
                </Info>
                <Info>
                  <Skeleton width="100px" height="20px" />
                  <IconButton>
                    <Copy size={16} />
                  </IconButton>
                </Info>
              </InfoContainer>
              <QRCodeContainer>
                <Skeleton width="100%" height="300px" />
              </QRCodeContainer>
            </>
          ) : (
            <>
              <ClassInfo>Join {classInfo.name}</ClassInfo>
              <InfoContainer>
                <Info>
                  <span>ID: {classInfo.id}</span>
                  <IconButton onClick={handleCopyId}>
                    {copiedId ? <Check size={16} /> : <Copy size={16} />}
                  </IconButton>
                </Info>
                <Info>
                  <span>Link</span>
                  <IconButton onClick={handleCopyLink}>
                    {copiedLink ? <Check size={16} /> : <Copy size={16} />}
                  </IconButton>
                </Info>
              </InfoContainer>
              <QRCodeContainer>
                <QRCodeCanvas
                  value={URL}
                  style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                />
              </QRCodeContainer>
              <Version>Version {APP_VERSION}</Version>
            </>
          )}
        </Content>
      </Modal>
    </QRCodeModalContainer>
  );
};

export default QRCodeModal;
