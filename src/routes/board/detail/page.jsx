import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import { getBoardItem } from "~/lib/apis/board";

export default function BoardDetail() {
  // useParams: url path(:boardId) 변수 받기
  const [board, setBoard] = useState(null);
  const { boardId } = useParams();

  useEffect(() => {
    getBoardItem({ boardId }).then((data) => {
      setBoard(data);
    });
  }, [boardId]);

  // useSearchParams: url query-string(? 뒤에 있는) 변수 받기
  const [searchParams, setSearchParams] = useSearchParams();

  // createBrowserRouter를 사용하여 Router를 구현.

  return (
    <div>
      {!board ? (
        <Container>
          <Row>
            <Col>게시글이 없습니다.</Col>
          </Row>
        </Container>
      ) : (
        <>
          <Row>
            <Col>
              <h4>{board.title}</h4>
            </Col>
          </Row>
          <Row>
            <Col>{board.content}</Col>
          </Row>
        </>
      )}
    </div>
  );
}
