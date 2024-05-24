import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/page";
import BoardPage from "./routes/board/page";
import BoardWritePage from "~/routes/board/write/page";

import BoardLayout from "~/routes/board/layout";
import BoardDetailPage from "~/routes/board/detail/page";

import CounterPage from "~/routes/counter/page";
import TodoPage from "~/routes/todo/page";

export const routerObj = [
  {
    path: "/todo",
    element: <TodoPage />,
  },
  {
    path: "/counter",
    element: <CounterPage />,
  },
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
        // parameter 전달 받기
        path: ":boardId",
        element: <BoardDetailPage />,
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
