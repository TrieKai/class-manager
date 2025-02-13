import { FC } from "react";
import {
  useGetStudentsQuery,
  useUpdateStudentCountMutation,
} from "../services/api";
import {
  StudentGrid,
  StudentCard,
  CounterContainer,
  Counter,
  CountButton,
} from "./styles";

const StudentList: FC = () => {
  const { data: students } = useGetStudentsQuery();
  const [updateCount] = useUpdateStudentCountMutation();

  const handleIncrement = async (id: string): Promise<void> => {
    try {
      await updateCount({ id, increment: true }).unwrap();
    } catch (error) {
      console.error("Failed to increment count:", error);
    }
  };

  const handleDecrement = async (id: string): Promise<void> => {
    try {
      await updateCount({ id, increment: false }).unwrap();
    } catch (error) {
      console.error("Failed to decrement count:", error);
    }
  };

  if (!students) {
    return null;
  }

  return (
    <StudentGrid>
      {students.map((student) => (
        <StudentCard key={student.id} isGuest={student.isGuest}>
          <div>{student.name}</div>
          <div>{student.position}</div>
          <CounterContainer>
            <Counter>
              <CountButton
                onClick={() => handleDecrement(student.id)}
                disabled={student.disabled || student.count === 0}
              >
                -
              </CountButton>
              <span>{student.count}</span>
              <CountButton
                onClick={() => handleIncrement(student.id)}
                disabled={student.disabled}
              >
                +
              </CountButton>
            </Counter>
          </CounterContainer>
        </StudentCard>
      ))}
    </StudentGrid>
  );
};

export default StudentList;
