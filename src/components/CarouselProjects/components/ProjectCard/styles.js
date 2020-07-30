import styled from 'styled-components';

import { AiOutlineCode } from 'react-icons/ai';

export const ProjectCardContainer = styled.div`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 200px;
  height: 140px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  background-color: ${({ color }) => color };
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const ProjectCardAvatar = styled.img`
  width: 30px !important;
  height: 30px !important;
  margin: 0 !important;
  border-radius: 50%;
`;

export const ProjectCardAuthor = styled.span`
  margin-left: 5px;
  font-size: 16px !important;
  margin-bottom: 5px;
`;

export const ProjectCardLikes = styled.span`
  font-size: 50px;
  color: #FFF;
  font-weight: 600;
  position: absolute;
  left: 33%;
  top: 10%;
`;

export const ProjectCardLikesDescription = styled.span`
  font-size: 14px;
  color: #FFF;
  font-weight: 600;
  margin-left: 5px;
`;

export const CodeIcon = styled(AiOutlineCode)`
  font-size: 60px;
  color: #FFF;
  font-weight: 600;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;