import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getBoardList } from "~/lib/apis/board";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoardList } from "~/store/reducers/board";

export default function BoardPage() {
  // useNavigate: navigate함수를 사용할 수 있게 함.
  // navigate: 페이지 이동 함수
  const navigate = useNavigate();
  const { boards: boardList, loading } = useSelector((state) => state.board);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = fetchBoardList();
    console.log("action", action);
    dispatch(action);
  }, [dispatch]);

  return (
    <div>
      <h1>BoardList</h1>
      <ListGroup>
        {boardList.map((board) => (
          <Link
            to={`/board/${board._id}`}
            key={board._id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListGroup.Item action>{board.title}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
      {/* <MyFooter brandTitle="My Board" /> */}
    </div>
  );
}
