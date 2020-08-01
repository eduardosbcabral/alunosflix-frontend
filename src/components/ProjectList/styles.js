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

  transition: all .5s;

  @media (max-width: 800px) {
    font-size: 20px;
    padding: 10px;
  }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
`;

List.Item = styled.li`
`;