import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #a5adbb;
  
  & > span {
    width: max-content;
  } 
`;

export const Count = styled.div`
  display: flex;
  margin-top: 10px;
  
  & > span {
    width: max-content;
    font-size: 26px;
    font-weight: bold;
    color: #ff595f;
  }
`;

export const Bar = styled.div`
  width: 4px;
  height: 30px;
  margin-right: 10px;
  background-color: #ff595f;
`;