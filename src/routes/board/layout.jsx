import MyNavbar from "~/components/MyNavbar/MyNavbar";
import MyFooter from "~/components/MyFooter/MyFooter";
import { Container } from "react-bootstrap";

import { Outlet } from "react-router-dom";
/**
 * em: 부모 태그의 font-size를 기준으로 크기를 지정
 * width: 2em, 부모 태그의 font-size: 20px, 부모태그의 width: 100px
 *
 * 1em: 20px;
 *
 * rem: root em, html(루트 태그의) font-size 기준으로 크기ㅣ 지정
 * vh, vw: viewport height, viewport width (사용자 디바이스의 화면 크기 기준)
 */
export default function BoardLayout() {
  return (
    <>
      <MyNavbar brandTitle="My Board" />
      <Container style={{ minHeight: "100vh" }}>
        <Outlet />
      </Container>
      <MyFooter brandTitle="My Board" />
    </>
  );
}
