import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  outline: none;
  padding: 0px 20px;
  color: #666;
  font-size: 13px;
  ::placeholder {
    color: #bbb;
  }
  cursor: pointer;
  border-radius: 4px;
`;

export default Button;