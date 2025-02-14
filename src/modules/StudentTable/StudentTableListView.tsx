import { FC } from "react";
import StudentTableCard from "./StudentTableCard";
import { StudentTableListViewContainer } from "./styles";
import type { Student } from "../../types/student";

interface Props {
  students: Student[];
}

const StudentTableListView: FC<Props> = ({ students }) => {
  return (
    <StudentTableListViewContainer>
      {students.map((student) => (
        <StudentTableCard student={student} key={student.id} />
      ))}
    </StudentTableListViewContainer>
  );
};

export default StudentTableListView;
