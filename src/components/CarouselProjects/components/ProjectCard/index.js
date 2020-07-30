import React from 'react';
import { ProjectCardContainer, CodeIcon, ProjectCardAvatar, ProjectCardAuthor, ProjectCardLikes, ProjectCardLikesDescription } from './styles';
import { useHistory } from 'react-router-dom';

function ProjectCard({ projectUrl, projectAuthor, projectLikes, categoryColor, projectAvatar, projectId }) {

  let history = useHistory();

  function handleClick() {
    history.push('/detalhe/' + projectId);
  }

  return (
    <ProjectCardContainer
      color={categoryColor}
      title={projectUrl}
      onClick={handleClick}
    >
      {/* <CodeIcon /> */}
      <ProjectCardLikes>
        {projectLikes}
        <ProjectCardLikesDescription>
          Curtidas
        </ProjectCardLikesDescription>
      </ProjectCardLikes>
      <ProjectCardAvatar src={projectAvatar} />
      <ProjectCardAuthor>
        {projectAuthor}
      </ProjectCardAuthor>
    </ProjectCardContainer>
  );
}

export default ProjectCard;
