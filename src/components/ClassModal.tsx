import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
import { RootState } from "../store";
import { setViewMode } from "../store/studentSlice";
import {
  registerModal,
  toggleModalVisibility,
  selectModalVisibility,
  unregisterModal,
} from "../store/modalSlice";
import { useGetStudentsQuery, useGetClassInfoQuery } from "../services/api";
import { Tabs, TabItem } from "./atoms/Tabs";
import StudentList from "./StudentList";
import StudentGroup from "./StudentGroup";
import {
  CloseButton,
  Header,
  Title,
  Content,
  ModalContainer,
  Modal,
} from "./styles";

const MODAL_ID = "class-modal";

const ClassModal: FC = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectModalVisibility(MODAL_ID));
  const viewMode = useSelector((state: RootState) => state.student.viewMode);
  const { data: students, isLoading: isLoadingStudents } =
    useGetStudentsQuery();
  const { data: classInfo, isLoading: isLoadingClassInfo } =
    useGetClassInfoQuery();

  useEffect(() => {
    dispatch(registerModal({ id: MODAL_ID, visible: true }));
    return () => {
      dispatch(unregisterModal({ modalId: MODAL_ID }));
    };
  }, [dispatch]);

  const handleClose = (): void => {
    dispatch(toggleModalVisibility({ id: MODAL_ID, visible: false }));
  };

  if (!isVisible) {
    return null;
  }

  if (isLoadingStudents || isLoadingClassInfo || !students || !classInfo) {
    return <div>Loading...</div>;
  }

  const tabItems: TabItem[] = [
    { key: "list", label: "List View" },
    { key: "group", label: "Group View" },
  ];

  const menuItems = [
    {
      label: "Edit Class",
      onClick: () => {
        console.log("Edit class clicked");
      },
    },
    {
      label: "Delete Class",
      onClick: () => {
        console.log("Delete class clicked");
      },
    },
  ];

  return (
    <ModalContainer>
      <Modal>
        <Header>
          <Title>
            {classInfo.name}
            <div>
              Class ID: {classInfo.id}
              <br />
              Students: {classInfo.currentCount}/{classInfo.maxCount}
            </div>
          </Title>
          <CloseButton onClick={handleClose}>
            <X size={24} />
          </CloseButton>
        </Header>

        <Content>
          <Tabs
            items={tabItems}
            activeKey={viewMode}
            onChange={(key) => dispatch(setViewMode(key as "list" | "group"))}
            menuItems={menuItems}
          />

          {viewMode === "list" ? <StudentList /> : <StudentGroup />}
        </Content>
      </Modal>
    </ModalContainer>
  );
};

export default ClassModal;
