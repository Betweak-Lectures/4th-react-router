// import MyNavbar from "~/components/MyNavbar/MyNavbar";
// import MyFooter from "~/components/MyFooter/MyFooter";

import { useLocation } from "react-router-dom";

export default function BoardPage() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      {/* <MyNavbar brandTitle="My Board" /> */}
      <h1>BoardList</h1>
      <p>boardPage</p>
      {/* <MyFooter brandTitle="My Board" /> */}
    </div>
  );
}
