import axios from "axios";

export async function getBoardList() {
  const resp = await axios.get("/api/board");
  return resp.data;
}

export async function getBoardItem({ boardId }) {
  const resp = await axios.get(`/api/board/${boardId}`);
  return resp.data;
}
