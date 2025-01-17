import React from 'react';
import { Link } from 'react-router-dom';

// import '../style';

export default function Nav() {
  return (
    <>
      <h2>ReactRouter 실습</h2>
      <nav>
        <ul>
          <li>
            <Link to="/student/sean">학생</Link>
          </li>
          <li>
            <Link to="/student/codingon">코딩온</Link>
          </li>
          <li>
            <Link to="/student/new?name=jisu">searchParams</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
