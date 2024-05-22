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
        index: true,
        element: <BoardPage />,
      },
      {
        path: "sample",
        element: <div>sample</div>,
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
