import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface StudentState {
  viewMode: "list" | "group";
}

const initialState: StudentState = {
  viewMode: "list",
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<"list" | "group">) => {
      state.viewMode = action.payload;
    },
  },
});

export const { setViewMode } = studentSlice.actions;

export const selectViewMode = (state: RootState) => state.student.viewMode;

export default studentSlice.reducer;
