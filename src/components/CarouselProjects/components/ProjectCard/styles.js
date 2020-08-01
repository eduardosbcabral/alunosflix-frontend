import styled from 'styled-components';

import { AiOutlineCode } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  border: 2px solid var(--primary);
  height: 120px;
  border-radius: 5px;

  cursor: pointer;

  transition: all .5s;

  @media(max-width: 800px) {
    flex-direction: column;
  }
  
  &:hover {
    opacity: .7;
  }
  /* border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  height: 200px;
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
  } */
`;

export const Avatar = {};

Avatar.Image = styled.img`
  width: 60px;
  border-radius: 50%;
  transition: all .5s;
  @media(max-width: 800px) {
    width: 45px;
  }
`;

Avatar.Image.Container = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  transition: all .5s;
`;

Avatar.Container = styled.div`
  display: flex;
  flex: 0.9;
  background-color: var(--primary);
  flex-direction: column;
  transition: all .5s;
`;

Avatar.Name = styled.div`
  color: var(--white);
  font-size: .8rem;
  font-weight: 400;
  transition: all .5s;
`;

Avatar.Name.Container = styled.div`
  display: flex;
  flex: .7;
  align-items: center;
  justify-content: center;
  transition: all .5s;
`;

export const Likes = {};

Likes.Container = styled.div`
  display: flex;
  flex: 1;
  transition: all .5s;
  justify-content: center;
  align-items: center;
`;

Likes.Text = styled.div`
  color: var(--primary);
  transition: all .5s;
  font-size: 2rem;
  font-weight: 600;
`;

// export const ProjectCardAvatar = styled.img`
//   width: 30px !important;
//   height: 30px !important;
//   margin: 0 !important;
//   border-radius: 50%;
// `;

// export const ProjectCardAuthor = styled.span`
//   margin-left: 5px;
//   font-size: 16px !important;
//   margin-bottom: 5px;
// `;

// export const ProjectCardLikes = styled.span`
//   font-size: 50px;
//   color: #FFF;
//   font-weight: 600;
//   position: absolute;
//   left: 33%;
//   top: 10%;
// `;

// export const ProjectCardLikesDescription = styled.span`
//   font-size: 14px;
//   color: #FFF;
//   font-weight: 600;
//   margin-left: 5px;
// `;

// export const CodeIcon = styled(AiOutlineCode)`
//   font-size: 60px;
//   color: #FFF;
//   font-weight: 600;
//   position: absolute;
//   top: 30%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;