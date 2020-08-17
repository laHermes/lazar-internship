import styled from "styled-components";

export const SearchInput = styled.div`
  width: 400px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: white;
  padding-right: 20px;
  input {
    width: 400px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: white;
    padding-left: 30px;
    font-size: 1rem;
    &:focus {
      background-color: white;
      border: none;
      outline: none;
    }
    &::placeholder {
      color: rgb(200, 100, 100);
    }
  }
`;
