import React from "react";
import styled from "styled-components";

export const NavbarStyle = styled.nav`
  width: 100%;
  height: 55px;
  background-color: black;
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    li {
      padding: 0 10px 0 10px;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
