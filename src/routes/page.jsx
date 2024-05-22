import { Outlet } from "react-router-dom";
export default function MainPage() {
  return (
    <div>
      <h1>MainPage</h1>
      <p>Hello My React Router</p>
      <Outlet />
    </div>
  );
}
