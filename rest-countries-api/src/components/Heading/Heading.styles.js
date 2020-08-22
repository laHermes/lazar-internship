import styled from "styled-components";

export const HeadingStyle = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
  width: 100%;
  height: 55px;
  font-family: "Nunito Sans";
  font-weight: 800;
  background-color: white;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);

  .container {
      margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      cursor: pointer;
    }

    ul {
      list-style: none;
      display: inherit;
      align-items: center;
    }

    ul li {
      cursor: pointer;
    }
  }
`;
