import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 15px;
  display: inline-block;
  border-radius: 10px;
  padding: 5px 15px 15px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
`;

export const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
`;

export const Detail = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 5px;
  border-bottom: 1px solid #ffffff6b;
  padding: 10px 0 5px;
  white-space: pre-wrap;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const Value = styled.span`
text-align: right;
`;

export const Title = styled.p`
  text-transform: capitalize;
`;
