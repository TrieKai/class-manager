import { FC, ReactNode } from "react";
import { X } from "lucide-react";
import { ModalContainer, ModalContent, CloseButton } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <CloseButton onClick={onClose}>
        <X size={24} />
      </CloseButton>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};
