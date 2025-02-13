import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setViewMode, toggleModal } from "../store/studentSlice";
import { useGetStudentsQuery, useGetClassInfoQuery } from "../services/api";
import StudentList from "./StudentList";
import GroupView from "./GroupView";
import {
  Modal,
  Header,
  CloseButton,
  TabContainer,
  Tab,
  ModalContainer,
} from "./styles";

const ClassModal: FC = () => {
  const dispatch = useDispatch();
  const { viewMode, isModalOpen } = useSelector(
    (state: RootState) => state.student
  );
  const { data: students, isLoading: isLoadingStudents } =
    useGetStudentsQuery();
  const { data: classInfo, isLoading: isLoadingClassInfo } =
    useGetClassInfoQuery();

  const handleClose = (): void => {
    dispatch(toggleModal());
  };

  if (!isModalOpen) return null;

  if (isLoadingStudents || isLoadingClassInfo) {
    return (
      <ModalContainer>
        <Modal>
          <Header>
            <div>Loading...</div>
          </Header>
        </Modal>
      </ModalContainer>
    );
  }

  if (!students || !classInfo) {
    return (
      <ModalContainer>
        <Modal>
          <Header>
            <div>Error loading data</div>
          </Header>
        </Modal>
      </ModalContainer>
    );
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
          <CloseButton onClick={handleClose}>×</CloseButton>
        </Header>

        <TabContainer>
          <Tab
            active={viewMode === "list"}
            onClick={() => dispatch(setViewMode("list"))}
          >
            Student List
          </Tab>
          <Tab
            active={viewMode === "group"}
            onClick={() => dispatch(setViewMode("group"))}
          >
            Group
          </Tab>
        </TabContainer>

        {viewMode === "list" ? (
          <StudentList students={students} />
        ) : (
          <GroupView students={students} />
        )}
      </Modal>
    </ModalContainer>
  );
};

export default ClassModal;
