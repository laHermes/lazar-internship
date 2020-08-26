import styled from "styled-components";

export const CardStyles = styled.div`
  width: 20%;
  min-width: 280px;
  height: 350px;
  margin: 10px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
  overflow: hidden;

  .hero {
    height: 200px;
    img {
      width: 100%;
      max-height: 200px;
    }
  }

  .info-holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3 {
      margin: 10px 0 0 0;
      padding: 0 20px;
    }
    ul {
      padding: 0 20px;
      list-style: none;
    }

    ul li {
      display: flex;
      align-items: center;
    }
    ul li h5 {
      margin: 0;
      padding: 0;
    }
  }
`;
