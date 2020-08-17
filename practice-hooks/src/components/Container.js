import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  margin: 0 auto;
  background-color: beige;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;

  ul {
    /* padding: 0 20px 0 20px; */
    padding: 0;
    float: left;
  }

  ul li {
    list-style: none;
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    font-size: 1rem;
  }
`;
