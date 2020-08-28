import styled from "styled-components";

export const InfoHolderStyles = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: flex-start;

  .flag-holder {
    width: 80%;
    img {
      width: 100%;
    }
  }

  .info-holder {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .text-holder {
      width: 100%;
      display: flex;
      flex-direction: row;

      ul {
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 0;
        li {
          display: inherit;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 10px;
          padding: 0;
          align-items: center;
          p {
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }

  .button-holder {
    display: flex;
  }
`;
