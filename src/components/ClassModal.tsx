import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setViewMode, toggleModal } from "../store/studentSlice";
import StudentList from "./StudentList";
import GroupView from "./GroupView";
import { Modal, Header, CloseButton, TabContainer, Tab } from "./styles";

const ClassModal: FC = () => {
  const dispatch = useDispatch();
  const { students, viewMode, isModalOpen } = useSelector(
    (state: RootState) => state.student
  );

  const handleClose = () => {
    dispatch(toggleModal());
  };

  if (!isModalOpen) return null;

  return (
    <Modal>
      <Header>
        <div>
          <h2>302 Science</h2>
          <p>16/30</p>
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
  );
};

export default ClassModal;
