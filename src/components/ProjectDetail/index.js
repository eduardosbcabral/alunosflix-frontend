import React, { useState, useEffect } from 'react';
import { Container, Header, Profile } from './styles';

const URL = 'https://alunosflix.appspot.com/projects';

export default function ProjectDetail({ 
  projectId, 
  projectAuthor, 
  projectAuthorAvatar, 
  projectLikes,
  projectUrl,
  title
}) {

  const backgroundURL = `https://api.screenshotmachine.com/?key=296fe8&url=${projectUrl}/&dimension=1024x768`;

  const [likes, setLikes] = useState(projectLikes);

  useEffect(() => {
    setLikes(projectLikes);
  }, [projectLikes]);

  async function handleLike() {
    const response = await fetch(`${URL}/like?id=${projectId}`);
    if(response.ok) {
      localStorage.setItem(projectId, 'liked');
      setLikes(likes+1);
    }
  }

  async function handleDislike() {
    const response = await fetch(`${URL}/dislike?id=${projectId}`);
    if(response.ok) {
        if(projectLikes > 0) {
          localStorage.removeItem(projectId, 'liked');
          setLikes(likes-1);
        }
    }
  }

  function checkLikedState() {
    let isLiked = localStorage.getItem(projectId);
    return isLiked === null;
  }

  return (
    <Container>
      <Header
        url={backgroundURL}
      />
      <Profile.Image.Container>
        <Profile.Image src={projectAuthorAvatar} />
      </Profile.Image.Container>
      <Profile.Info.Container>
        <Profile.Info.Likes.Container>
          <Profile.Info.Likes>
            {likes}
          </Profile.Info.Likes>
          <Profile.Info.Likes.Icon.Container>
          {
            checkLikedState() 
            ? <Profile.Info.Likes.Icon.Like onClick={handleLike} />
            : <Profile.Info.Likes.Icon.Dislike onClick={handleDislike} />
          }  
          </Profile.Info.Likes.Icon.Container>
        </Profile.Info.Likes.Container>
        {title && (
          <Profile.Info.Title.Container>
            <Profile.Info.Title>
              {title}
            </Profile.Info.Title>
          </Profile.Info.Title.Container>
        )}
        <Profile.Info.Name.Container>
          <Profile.Info.Name>
            {projectAuthor}
          </Profile.Info.Name>
        </Profile.Info.Name.Container>
        <Profile.Info.Button.Container>
          <Profile.Info.Button href={projectUrl} target="_blank">
            ABRIR PROJETO
          </Profile.Info.Button>
        </Profile.Info.Button.Container>
      </Profile.Info.Container>
    </Container>
  );
}
