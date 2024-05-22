import MyNavbar from "~/components/MyNavbar/MyNavbar";
import MyFooter from "~/components/MyFooter/MyFooter";
import { Container } from "react-bootstrap";

import { Outlet } from "react-router-dom";

export default function BoardLayout() {
  return (
    <>
      <MyNavbar brandTitle="My Board" />
      <Container>
        <Outlet />
      </Container>
      <MyFooter brandTitle="My Board" />
    </>
  );
}
