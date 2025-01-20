import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigate = styled.nav`
  width: 100%;
  background-color: aliceblue;
  height: 70px;
  /* display: flex;
  justify-content: end;
  align-items: center; */
`;

const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const MyLink = styled(Link)`
  color: green;
`;

const Li = styled.li`
  margin-left: 1rem;
`;

// import '../style';

export default function Nav() {
  return (
    <>
      <h2>ReactRouter 실습</h2>
      <Navigate>
        <Ul>
          <Li>
            <MyLink to="/student/sean">학생</MyLink>
          </Li>
          <Li>
            <MyLink to="/student/codingon">코딩온</MyLink>
          </Li>
          <Li>
            <MyLink to="/student/new?name=jisu">searchParams</MyLink>
          </Li>
        </Ul>
      </Navigate>
    </>
  );
}
