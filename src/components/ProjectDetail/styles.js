import styled from 'styled-components';

import { FcLike, FcDislike } from 'react-icons/fc';

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 20px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
`;

ContentAreaContainer.Description = styled.p`
  font-size: 30px;
  margin-top: 5px;
  @media (max-width: 800px) {
    text-align: center;
  }
`;

ContentAreaContainer.DescriptionLink = styled.a`
  font-size: 20px;
  margin-bottom: 5px;
  @media (max-width: 800px) {
    text-align: center;
  }
`;

ContentAreaContainer.LikesContainer = styled.p`
  @media (max-width: 800px) {
    text-align: center;
  }
`;

ContentAreaContainer.Likes = styled.span`
  font-size: 25px;
  background-color: #FFF;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  
  @media (max-width: 800px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

ContentAreaContainer.LikesDescription = styled.span`
  font-size: 25px;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  
  @media (max-width: 800px) {
    text-align: center;
  }
`;

ContentAreaContainer.TitleOne = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 1;
  margin-top: 15px;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;


ContentAreaContainer.TitleTwo = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 15px;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const ProjectDetailContainer = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-color: #7E78D2;
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const ProjectButton = styled.a`
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  cursor: pointer;
  padding: 40px 59px;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid transparent;
  color: var(--black);
  background: var(--white);
  border-color: var(--black);
  transition: opacity .3s;
  display: block;
  margin: 0 auto;
  text-align: center;
`;

export const LikeContainer = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

LikeContainer.LikeButton = styled(FcLike)`
  font-size: 50px;

  &:hover {
    cursor: pointer;
    opacity: .7;
  }
`;

LikeContainer.DislikeButton = styled(FcDislike)`
  font-size: 50px;

  &:hover {
    cursor: pointer;
    opacity: .7;
  }
`;