import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/page";
import BoardPage from "./routes/board/page";
import BoardWritePage from "~/routes/board/write/page";

import BoardLayout from "~/routes/board/layout";

export const routerObj = [
  {
    path: "/",
    element: <MainPage />,
    index: true,
  },
  {
    path: "/board",
    element: <BoardLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <BoardPage />,
      },
      {
        path: "write",
        element: <BoardWritePage />,
      },
    ],
  },
];
const router = createBrowserRouter(routerObj);
export default router;
