import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getBoardList } from "~/lib/apis/board";

export default function BoardPage() {
  const [boardList, setBoardList] = useState([]);
  // const location = useLocation();
  // console.log(location);

  // useNavigate: navigate함수를 사용할 수 있게 함.
  // navigate: 페이지 이동 함수
  const navigate = useNavigate();

  useEffect(() => {
    getBoardList().then((data) => {
      setBoardList(data);
    });
  }, []);

  return (
    <div>
      {/* <MyNavbar brandTitle="My Board" /> */}
      {/* <Link to="/board/13">13번 게시글</Link>

      <div
        onClick={() => {
          navigate("/board/10");
        }}
      >
        10번 게시글로 이동.
      </div> */}
      {/* <div
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </div> */}

      <h1>BoardList</h1>
      <ul>
        {boardList.map((board) => (
          <li key={board._id}>{board.title}</li>
        ))}
      </ul>
      {/* <MyFooter brandTitle="My Board" /> */}
    </div>
  );
}
