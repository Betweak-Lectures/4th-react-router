import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBoardList, getBoardItem } from "~/lib/apis/board";

const initialState = {
  boards: [],
  loading: "idle",
};
// 비동기 처리를 위한 thunk 생성
const fetchBoardList = createAsyncThunk(
  "board/fetchBoardList",
  async (_data, thunkAPI) => {
    const data = await getBoardList();

    return data;
  }
);
fetchBoardList.pending, fetchBoardList.fulfilled, fetchBoardList.rejected;

const fetchBoardById = createAsyncThunk(
  "board/fetchBoardById",
  async (boardId, thunkAPI) => {
    const data = await getBoardItem({ boardId: boardId });
    return data;
  }
);
// fetchBoardById("<boardId값>")
// fetchBoardById("123")
// fetchBoardById.fulfilled
// fetchBoardById.rejected

// // thunk
export function thunkBoardActionCreator(args) {
  return async function (dispatch, getState) {
    dispatch({
      type: "board/fetchBoardList/pending",
    });
    try {
      const data = await getBoardList(args);
      dispatch({
        type: "board/fetchBoardList/fulfilled",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "board/fetchBoardList/rejected",
        payload: error,
      });
    }
  };
}
// const action = thunkBoardActionCreator();

// api를 호출 예정.
console.log(fetchBoardList.pending.type);
console.log(fetchBoardList.fulfilled.type);
console.log(fetchBoardList.rejected.type);

const boardSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase("board/fetchBoardList/pending", (state, action) => {
    //   state.loading = "pending";
    // });
    builder.addCase(fetchBoardList.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchBoardList.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      //   state.boards.push(...action.payload);
      state.boards = action.payload;
    });
    builder.addCase(fetchBoardList.rejected, (state, action) => {
      state.loading = "rejected";
      console.log(action);
    });
  },
});
export { fetchBoardList };
export default boardSlice.reducer;
