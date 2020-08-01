import React from 'react';
import { Container, Avatar, Likes } from './styles';
import { useHistory } from 'react-router-dom';

function ProjectCard({ projectUrl, projectAuthor, projectLikes, categoryColor, projectAvatar, projectId }) {

  let history = useHistory();

  function handleClick() {
    history.push('/detalhe/' + projectId);
  }

  return (
    <div onClick={handleClick}>
      <Avatar.Container>
        <Avatar.Image.Container>
          <Avatar.Image src={projectAvatar} />
        </Avatar.Image.Container>
        <Avatar.Name.Container>
          <Avatar.Name>
            {projectAuthor}
          </Avatar.Name>
        </Avatar.Name.Container>
      </Avatar.Container>
      <Likes.Container>
        <Likes.Text>
          {projectLikes}
        </Likes.Text>
      </Likes.Container>
    </div>
  );
}

export default ProjectCard;
