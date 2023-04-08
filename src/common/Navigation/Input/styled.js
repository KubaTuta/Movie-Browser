import styled from "styled-components";

export const NavInput = styled.input`
  border-radius: 33px;
  border: white;
  padding: 11px;
  font-size: 16px;
  font-weight: 400;
  padding-inline-start: 52px;
  flex-basis: 100%;
  width: 48px;
  border-radius: 33px;
  border: 1px solid #E4E6F0;
  
  &:focus{
    outline: none;
  };
 
  ::placeholder {
    color: ${({ theme }) => theme.color.waterloo};
  };
`;