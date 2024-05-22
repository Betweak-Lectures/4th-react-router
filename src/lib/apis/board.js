import axios from "axios";

export async function getBoardList() {
  const resp = await axios.get("/api/board");
  return resp.data;
}
