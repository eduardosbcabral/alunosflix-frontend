import React from 'react';
import { TopProjectContainer, ContentAreaContainer, ProjectButton, LikeContainer } from './styles';

export default function TopProject({
  projectUrl,
  projectAuthor,
  projectLikes,
  projectAuthorAvatar,
  projectId
}) {
  return (
    <TopProjectContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            Projeto mais votado
          </ContentAreaContainer.Title>
          <ContentAreaContainer.Avatar src={projectAuthorAvatar} />
          <ContentAreaContainer.Description>
            {projectAuthor}
          </ContentAreaContainer.Description>
          <ContentAreaContainer.DescriptionLink href={projectUrl} target="_blank">
            {projectUrl}
          </ContentAreaContainer.DescriptionLink>
          <ContentAreaContainer.LikesContainer>
            <ContentAreaContainer.Likes>
              {projectLikes}
            </ContentAreaContainer.Likes>
            <ContentAreaContainer.LikesDescription>
              {projectLikes === 1 ? 'Curtida' : 'Curtidas'}
            </ContentAreaContainer.LikesDescription>
          </ContentAreaContainer.LikesContainer>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <ProjectButton to={'/detalhe/' + projectId}>
            Abrir projeto
          </ProjectButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </TopProjectContainer>
  );
}
