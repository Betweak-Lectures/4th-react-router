import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/page";
import BoardPage from "./routes/board/page";

import BoardLayout from "~/routes/board/layout";

const router = createBrowserRouter([
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
        element: <BoardPage />,
        index: true,
      },
    ],
  },
  // {
  //   path: "/board",
  //   element: <BoardPage />,
  //   index: true,
  // },
]);

export default router;
