import { FC } from "react";
import { useUpdateStudentCountMutation } from "@/services/api";
import { theme } from "@/styles/theme";
import {
  TableViewCardCountButton,
  TableViewCardPosition,
  TableViewStudentCard,
  TableViewCardCounter,
  TableViewCardName,
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
    <TableViewStudentCard disabled={student.isGuest}>
      <TableViewCardPosition disabled={student.disabled}>
        {student.position}
      </TableViewCardPosition>
      <TableViewCardName>{student.name}</TableViewCardName>
      <TableViewCardCounter disabled={student.disabled}>
        <TableViewCardCountButton
          color={theme.colors.error}
          disabled={student.disabled || student.count === 0}
          onClick={() => handleDecrement(student.id)}
        >
          - 1
        </TableViewCardCountButton>
        <span>{student.count}</span>
        <TableViewCardCountButton
          color={theme.colors.success}
          disabled={student.disabled}
          onClick={() => handleIncrement(student.id)}
        >
          + 1
        </TableViewCardCountButton>
      </TableViewCardCounter>
    </TableViewStudentCard>
  );
};

export default StudentTableCard;
