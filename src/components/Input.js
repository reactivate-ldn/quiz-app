import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  outline: none;
  padding: 0px 20px;
  margin-bottom: 20px;
  color: #666;
  font-size: 13px;
  ::placeholder {
    color: #bbb;
  }
  border-radius: 4px;
`;

export default Input;
