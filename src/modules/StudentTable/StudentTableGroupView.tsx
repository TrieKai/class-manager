import { FC } from "react";
import styled from "styled-components";
import type { Student } from "../../types/student";

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GroupTitle = styled.h3`
  margin: 0;
  padding: 10px 0;
`;

const StudentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const StudentCard = styled.div<{ isGuest: boolean }>`
  position: relative;
  padding: 16px;
  background: ${(props) => (props.isGuest ? "#f5f5f5" : "white")};
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

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

export default StudentTableGroupView;
