import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="NotFound">
      <h2>404 ERROR!! 🚨</h2>
      <Link to="/">홈으로</Link>
    </div>
  );
}
