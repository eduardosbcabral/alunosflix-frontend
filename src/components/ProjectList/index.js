import React from 'react';
import ProjectCard from '../CarouselProjects/components/ProjectCard';
import { List, Title } from './styles';

function ProjectList({ projects, ignoreFirstProject, title }) {
    return (
		<div style={{display: 'flex', flex: '1', flexDirection: 'column'}}>
			{title && (
				<div style={{display: 'flex', paddingLeft: '15px', paddingRight: '15px'}}>
					<Title>
						{title}
					</Title>
				</div>
			)}
			<div style={{display: 'flex'}}>
				<List>
					{projects.map((project, index) => {
						if (ignoreFirstProject && index === 0) {
								return null;
						}

						return (
							<List.Item key={index}>
								<ProjectCard
									projectUrl={project.url}
									projectAuthor={project.author}
									projectLikes={project.likes}
									projectAvatar={project.authorAvatar}
									projectId={project.id}
								/>
							</List.Item>
						);
					})}
				</List>
			</div>
		</div>
    );
}

export default ProjectList;