import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export interface Modal {
  id: string;
  visible: boolean;
}

interface ModalState {
  modals: Record<string, Modal>;
}

const initialState: ModalState = {
  modals: {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    registerModal: (state, action: PayloadAction<Modal>) => {
      const { payload } = action;
      if (!state.modals[payload.id]) {
        state.modals[payload.id] = payload;
      }
    },
    toggleModalVisibility: (
      state,
      action: PayloadAction<{ id: string; visible: boolean }>
    ) => {
      const { id, visible } = action.payload;
      if (state.modals[id]) {
        state.modals[id].visible = visible;
      }
    },
    unregisterModal: (state, action: PayloadAction<{ modalId: string }>) => {
      const { modalId } = action.payload;
      delete state.modals[modalId];
    },
  },
});

export const { registerModal, toggleModalVisibility, unregisterModal } =
  modalSlice.actions;

export const selectModalVisibility = (id: string) => (state: RootState) =>
  state.modals.modals[id]?.visible;

export default modalSlice.reducer;
