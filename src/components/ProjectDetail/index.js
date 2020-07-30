import React, { useState, useEffect } from 'react';
import { ProjectDetailContainer, ContentAreaContainer, ProjectButton, LikeContainer } from './styles';

const URL = 'http://localhost:51770/projects';

export default function ProjectDetail(props) {
  const [project, setProject] = useState(props)
  const [, updateState] = React.useState();

  useEffect(() => {
    setProject(props)
  }, [props]);

  async function handleLike() {
    const response = await fetch(`${URL}/like?id=${project.projectId}`);
        if(response.ok) {
          let updatedProject = Object.assign({}, project);
          updatedProject.projectLikes++;
          localStorage.setItem(project.projectId, 'liked');
          setProject(updatedProject);
        }
  }

  async function handleDislike() {
    const response = await fetch(`${URL}/dislike?id=${project.projectId}`);
        if(response.ok) {
            if(project.projectLikes > 0) {
              let updatedProject = Object.assign({}, project);
              updatedProject.projectLikes--;
              localStorage.removeItem(project.projectId, 'liked');
              setProject(updatedProject);
              forceUpdate();
            }
        }
  }

  function checkLikedState() {
    let isLiked = localStorage.getItem(project.projectId);
    return isLiked === null;
  }

  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <ProjectDetailContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          {props.title ? <ContentAreaContainer.TitleOne>
            {props.title}
          </ContentAreaContainer.TitleOne> : ''}
          <ContentAreaContainer.Avatar src={project.projectAuthorAvatar} />
          <ContentAreaContainer.TitleTwo>
            {props.projectAuthor}
          </ContentAreaContainer.TitleTwo>
          <ContentAreaContainer.DescriptionLink href={project.projectUrl} target="_blank">
            {project.projectUrl}
          </ContentAreaContainer.DescriptionLink>
          <ContentAreaContainer.LikesContainer>
            <ContentAreaContainer.Likes>
              {project.projectLikes}
            </ContentAreaContainer.Likes>
            <ContentAreaContainer.LikesDescription>
              {project.projectLikes === 1 ? 'Curtida' : 'Curtidas'}
            </ContentAreaContainer.LikesDescription>
          </ContentAreaContainer.LikesContainer>
          <LikeContainer>
            {checkLikedState()
            ? <LikeContainer.LikeButton onClick={handleLike} />
            : <LikeContainer.DislikeButton onClick={handleDislike} /> }
          </LikeContainer>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <ProjectButton href={project.projectUrl} target="_blank">
            Abrir projeto
          </ProjectButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </ProjectDetailContainer>
  );
}
