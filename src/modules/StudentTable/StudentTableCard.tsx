import { FC } from "react";
import { useUpdateStudentCountMutation } from "@/services/api";
import {
  CountButton,
  Counter,
  CounterContainer,
  NameCell,
  PositionCell,
  StudentRow,
} from "./styles";
import type { Student } from "@/types/student";

interface Props {
  student: Student;
}

const StudentTableCard: FC<Props> = ({ student }) => {
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

  return (
    <StudentRow isGuest={student.isGuest}>
      <PositionCell>{student.position}</PositionCell>
      <NameCell>{student.name}</NameCell>
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
    </StudentRow>
  );
};

export default StudentTableCard;
