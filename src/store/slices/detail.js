import { createSlice } from "@reduxjs/toolkit";

const detail = createSlice({
  name: 'detail',
  initialState: {
    numCnt: 0,
  },

  reducers: {
    addnumCnt(state) {
      state.numCnt += 1;
    },
    minusnumCnt(state) {
      state.numCnt -= 1;
    },
    changenumCnt(state, action) {
      const regex = /^[0-9]+$/;
      if(regex.test(action.payload)) {
        state.numCnt = parseInt(action.payload);
      }
      else {
        console.log('넘버 아님', action.payload);
      }
    },
  }
});

export const {
  addnumCnt,
  minusnumCnt,
  changenumCnt,
} = detail.actions;

export default detail.reducer;