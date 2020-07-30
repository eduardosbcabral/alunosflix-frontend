import React from 'react';
import { ProjectCardGroupContainer, Title, ExtraLink } from './styles';
import ProjectCard from './components/ProjectCard';
import Slider, { SliderItem } from './components/Slider';

function CarouselProjects({
  projects,
  title,
  ignoreFirstProject
}) {
  console.log(projects);
  const categoryTitle = title;
  const categoryColor = '#7E78D2';

  return (
    <ProjectCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
        </>
      )}
      <Slider>
        {projects.map((project, index) => {
          if (ignoreFirstProject && index === 0) {
            return null;
          }

          return (
            <SliderItem key={index}>
              <ProjectCard
                projectUrl={project.url}
                projectAuthor={project.author}
                projectLikes={project.likes}
                categoryColor={categoryColor}
                projectAvatar={project.authorAvatar}
                projectId={project.id}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </ProjectCardGroupContainer>
  );
}

export default CarouselProjects;
