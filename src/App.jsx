import MainRouter, { routerObj } from "./main-router";
import {
  Route,
  RouterProvider,
  BrowserRouter,
  Routes,
  Link,
} from "react-router-dom";

function renderRoutes(routesObj) {
  return routesObj.map((route) => {
    if (route.children) {
      return (
        <Route
          key={route.path}
          path={route.path}
          index={route.index}
          element={route.element}
        >
          {route.children ? renderRoutes(route.children) : null}
        </Route>
      );
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        index={route.index}
        element={route.element}
      />
    );
  });
}

function App() {
  // return (
  //   <BrowserRouter>
  //     <>
  //       <div>
  //         <Link to="/">메인</Link>
  //       </div>
  //       <div>
  //         <Link to="/board">게시글</Link>
  //       </div>
  //       <div>
  //         <Link to="/board/write">글쓰기페이지</Link>
  //       </div>
  //       <div style={{ backgroundColor: "gray" }}>
  //         <Routes>
  //           <Route path="/" element={"메인"}></Route>
  //           <Route path="/board" element={<>게시글</>}></Route>
  //           <Route path="/board/write" element={<>글쓰기페이지</>}>
  //             <Route path="sample" element={<>sample</>}></Route>
  //           </Route>
  //           {/* {renderRoutes(routerObj)} */}
  //         </Routes>
  //       </div>
  //       <div>Footer</div>
  //     </>
  //   </BrowserRouter>
  // );
  return <RouterProvider router={MainRouter}></RouterProvider>;
}

export default App;
