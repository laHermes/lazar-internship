import styled from "styled-components";

export const InputStyled = styled.div`
  width: 400px;
  position: relative;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  padding-left: 25px;
  height: 30px;
  border-radius: 5px;

  input {
    width: 380px;
    border: none;
    height: 25px;
  }
  input:focus{
    outline: none;
  }
  
  .icon {
    top: 5px;
    left: 10px;
    position: absolute;
  }
`;
