import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Student, ViewMode } from "../types/student";

interface StudentState {
  students: Student[];
  viewMode: ViewMode;
  isModalOpen: boolean;
}

const initialState: StudentState = {
  students: [],
  viewMode: "list",
  isModalOpen: true,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudents: (state, action: PayloadAction<Student[]>) => {
      state.students = action.payload;
    },
    incrementCount: (state, action: PayloadAction<string>) => {
      const student = state.students.find((s) => s.id === action.payload);
      if (student && !student.disabled) {
        student.count += 1;
      }
    },
    decrementCount: (state, action: PayloadAction<string>) => {
      const student = state.students.find((s) => s.id === action.payload);
      if (student && !student.disabled && student.count > 0) {
        student.count -= 1;
      }
    },
    setViewMode: (state, action: PayloadAction<ViewMode>) => {
      state.viewMode = action.payload;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const {
  setStudents,
  incrementCount,
  decrementCount,
  setViewMode,
  toggleModal,
} = studentSlice.actions;

export default studentSlice.reducer;
