import { Link } from "react-router-dom";

/**
 * Link 컴포넌트: Client Side Routing
 * 기본 anchor태그: Server Side Routing
 */

export default function MainPage() {
  return (
    <div>
      <h1>MainPage</h1>
      <p>Hello My React Router</p>

      <div>
        <Link to="/board" state={{ name: "신윤수" }}>
          게시판으로 이동
        </Link>
      </div>
      <div>
        <a href="/board">anchor태그</a>
      </div>
    </div>
  );
}
