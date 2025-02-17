import { FC } from "react";
import {
  GroupViewCard,
  GroupViewContainer,
  GroupViewGrid,
  GroupViewTitle,
} from "./styles";
import type { Student } from "../../types/student";

interface Props {
  students: Student[];
}

const StudentTableGroupView: FC<Props> = ({ students }) => {
  const groups = students.reduce((acc: Student[][], student, index) => {
    const groupIndex = Math.floor(index / 5);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(student);
    return acc;
  }, []);

  return (
    <GroupViewContainer>
      {groups.map((group, index) => (
        <div key={index}>
          <GroupViewTitle>Group {index + 1}</GroupViewTitle>
          <GroupViewGrid>
            {group.map((student) => (
              <GroupViewCard key={student.id} isGuest={student.isGuest}>
                <div>{student.position}</div>
                <div>{student.name}</div>
              </GroupViewCard>
            ))}
          </GroupViewGrid>
        </div>
      ))}
    </GroupViewContainer>
  );
};

export default StudentTableGroupView;
