import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setStudents, setViewMode, toggleModal } from "../store/studentSlice";
import StudentList from "./StudentList";
import GroupView from "./GroupView";
import { fetchStudents } from "@/utils/api";
import { Modal, Header, CloseButton, TabContainer, Tab } from "./styles";

const ClassModal: FC = () => {
  const dispatch = useDispatch();
  const { students, viewMode, isModalOpen } = useSelector(
    (state: RootState) => state.student
  );

  const handleClose = (): void => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const students = await fetchStudents();
      dispatch(setStudents(students));
    };

    void loadData();
  }, [dispatch]);

  if (!isModalOpen) {
    return null;
  }

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
