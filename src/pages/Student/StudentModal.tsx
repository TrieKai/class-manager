import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "lucide-react";
import {
  registerModal,
  toggleModalVisibility,
  selectModalVisibility,
  unregisterModal,
} from "@/store/modalSlice";
import { useGetStudentsQuery, useGetClassInfoQuery } from "@/services/api";
import { StudentTable } from "@/modules/StudentTable";
import { Modal } from "@/components/Modal";
import { ClassInfo, Content, TitleContainer } from "./styles";

const MODAL_ID = "student-modal";

const StudentModal: FC = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectModalVisibility(MODAL_ID));
  const { data: students, isLoading: isLoadingStudents } =
    useGetStudentsQuery();
  const { data: classInfo, isLoading: isLoadingClassInfo } =
    useGetClassInfoQuery();

  const handleClose = (): void => {
    dispatch(toggleModalVisibility({ id: MODAL_ID, visible: false }));
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

  if (isLoadingStudents || isLoadingClassInfo || !students || !classInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Modal isOpen={isVisible} onClose={handleClose}>
      <Content>
        <TitleContainer>
          <ClassInfo>{classInfo.name}</ClassInfo>
          <User size={16} />
          <p>
            {classInfo.currentCount}/{classInfo.maxCount}
          </p>
        </TitleContainer>
        <StudentTable />
      </Content>
    </Modal>
  );
};

export default StudentModal;
