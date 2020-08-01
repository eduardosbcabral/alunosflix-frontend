import React, { useState, useEffect } from 'react';

import PageDefault from '../../components/PageDefault';
import Footer from '../../components/Footer';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectList from '../../components/ProjectList';

const URL = 'https://alunosflix.appspot.com/projects/list-top';

function Home() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const response = await fetch(URL);
    const json = await response.json();
    setProjects(json);
  }

  return (
    <PageDefault>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <div style={{display: 'flex', flex: 1, width: '100%'}}>
          {projects && projects.length>0 && (
            <ProjectDetail 
              projectUrl={projects[0].url}
              projectAuthor={projects[0].author}
              projectLikes={projects[0].likes}
              projectAuthorAvatar={projects[0].authorAvatar}
              projectId={projects[0].id}
              title="Projeto mais curtido"
            />
          )}
        </div>
        <div style={{display: 'flex', flex: 1}}>
          {projects && (
            <ProjectList
              projects={projects}
              title="TOP PROJETOS"
              ignoreFirstProject
            />
          )}
        </div>
      </div>
    </PageDefault>
  );
}

export default Home;
