import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

// ul -> List : styled-components에 의해 변경되었다
const List = styled.ul`
  display: flex;
  &:hover {
    font-weight: 700;
  }
`;


const Item = styled.li``;
const ALink = styled(Link)``; 
// react-router-dom에서 불러온 Link를 styled-components를 이용해 꾸며줄 수 있다.

export default () => (
  <Header>
    <List>
      <Item>
        <ALink to="/">Movies</ALink>
      </Item>
      <Item>
        <ALink to="/tv">TV</ALink>
      </Item>
      <Item>
        <ALink to="/search">Search</ALink>
      </Item>
    </List>
  </Header>
);
