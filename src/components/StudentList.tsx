import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../store/studentSlice";
import {
  StudentGrid,
  StudentCard,
  CounterContainer,
  Counter,
  CountButton,
  MenuButton,
  Tooltip,
} from "./styles";
import { Student } from "../types/student";

interface Props {
  students: Student[];
}

const StudentList: FC<Props> = ({ students }) => {
  const dispatch = useDispatch();
  const [tooltipStudent, setTooltipStudent] = useState<number | null>(null);

  const handleIncrement = (id: number) => {
    dispatch(incrementCount(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementCount(id));
  };

  const toggleTooltip = (id: number) => {
    setTooltipStudent(tooltipStudent === id ? null : id);
  };

  return (
    <StudentGrid>
      {students.map((student) => (
        <StudentCard key={student.id} isGuest={student.isGuest}>
          <MenuButton onClick={() => toggleTooltip(student.id)}>...</MenuButton>
          {tooltipStudent === student.id && (
            <Tooltip>
              <div>Student Details</div>
              <div>Position: {student.position}</div>
            </Tooltip>
          )}
          <div>{student.position}</div>
          <div>{student.name}</div>
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
