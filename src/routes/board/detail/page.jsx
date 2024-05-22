import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
export default function BoardDetail() {
  // useParams: url path(:boardId) 변수 받기
  const [board, setBoard] = useState({
    title: "",
    conent: "",
  });
  const params = useParams();

  // useSearchParams: url query-string(? 뒤에 있는) 변수 받기
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("where"));
  console.log(searchParams.get("cgr"));

  // useEffect(() => {
  //   setSearchParams({
  //     where: "sample",
  //     cgr: "saa",
  //   });
  // });

  // createBrowserRouter를 사용하여 Router를 구현.

  return <div>BoardDetail</div>;
}
