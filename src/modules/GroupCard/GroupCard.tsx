import { FC } from "react";
import { Student } from "../../types/student";
import { useUpdateStudentCountMutation } from "../../services/api";
import {
  CardContainer,
  CardGrid,
  StudentItem,
  CounterContainer,
  Counter,
  CountButton,
} from "./styles";

interface GroupCardProps {
  students: Student[];
}

export const GroupCard: FC<GroupCardProps> = ({ students }) => {
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
    <CardGrid>
      {students.map((student) => (
        <CardContainer key={student.id} isGuest={student.isGuest}>
          <StudentItem>
            <div>{student.name}</div>
            <div>{student.position}</div>
          </StudentItem>
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
        </CardContainer>
      ))}
    </CardGrid>
  );
};
