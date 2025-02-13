import { FC } from "react";
import styled from "styled-components";
import { StudentGrid, StudentCard } from "./styles";
import type { Student } from "../types/student";

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GroupTitle = styled.h3`
  margin: 0;
  padding: 10px 0;
`;

interface Props {
  students: Student[];
}

const GroupView: FC<Props> = ({ students }) => {
  const groups = students.reduce((acc: Student[][], student, index) => {
    const groupIndex = Math.floor(index / 5);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(student);
    return acc;
  }, []);

  return (
    <GroupContainer>
      {groups.map((group, index) => (
        <div key={index}>
          <GroupTitle>Group {index + 1}</GroupTitle>
          <StudentGrid>
            {group.map((student) => (
              <StudentCard key={student.id} isGuest={student.isGuest}>
                <div>{student.position}</div>
                <div>{student.name}</div>
              </StudentCard>
            ))}
          </StudentGrid>
        </div>
      ))}
    </GroupContainer>
  );
};

export default GroupView;
