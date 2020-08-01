import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 1;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;
  background-color: var(--primary);
  margin: 0;
  margin-top: 15px;
  overflow: hidden;
  transition: all .5s;
  margin-bottom: 15px;

  @media (max-width: 800px) {
    font-size: 20px;
    padding: 10px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 25px;
  column-gap: 10px;
  list-style: none;
  text-align: justify;
  width : 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

List.Item = styled.div`
`;