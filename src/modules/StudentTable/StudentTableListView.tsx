import { FC } from "react";
import StudentTableCard from "./StudentTableCard";
import { TableListViewContainer } from "./styles";
import type { Student } from "../../types/student";

interface Props {
  students: Student[];
}

const StudentTableListView: FC<Props> = ({ students }) => {
  return (
    <TableListViewContainer>
      {students.map((student) => (
        <StudentTableCard student={student} key={student.id} />
      ))}
    </TableListViewContainer>
  );
};

export default StudentTableListView;
