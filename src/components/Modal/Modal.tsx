import { FC, ReactNode } from "react";
import { X } from "lucide-react";
import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  CloseButton,
  Title,
} from "./styles";

interface ModalProps {
  title?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalHeader>
        <Title>{title}</Title>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};
