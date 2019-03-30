import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Header = styled.header`
  padding: 0px 15px;
`;

// ul -> List : styled-components에 의해 변경되었다
const List = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const Item = styled.li`
  padding-bottom: 3px;
  margin-right: 10px;
  border-bottom: 3px solid
    ${props => (props.current ? "#1071FF" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
  &:last-child {
    margin-right: 0;
  }
`;

const ALink = styled(Link)``;
// react-router-dom에서 불러온 Link를 styled-components를 이용해 꾸며줄 수 있다.

export default withRouter(({ location: { pathname } }) => (
  // withRouter를 통해 컴포넌트에 접근해 props를 얻어낸다.
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <ALink to="/">フィルム</ALink>
      </Item>
      <Item current={pathname === "/tv"}>
        <ALink to="/tv">放送</ALink>
      </Item>
      <Item current={pathname === "/search"}>
        <ALink to="/search">
          <FaSearch />
        </ALink>
      </Item>
    </List>
  </Header>
));
