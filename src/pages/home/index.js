import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import CarouselProjects from '../../components/CarouselProjects';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';
import TopProject from '../../components/TopProject';
import ProjectDetail from '../../components/ProjectDetail';

const URL = 'http://localhost:51770/projects/list-top';

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
    <div style={{background: "#141414"}}>
      <Menu />

      {projects.length>0 && (
        <ProjectDetail 
          projectUrl={projects[0].url}
          projectAuthor={projects[0].author}
          projectLikes={projects[0].likes}
          projectAuthorAvatar={projects[0].authorAvatar}
          projectId={projects[0].id}
          title="Projeto mais curtido"
        />
      )}

      <CarouselProjects
        title="Top Projetos"
        projects={projects}
        ignoreFirstProject
      />

      <Footer />
    </ div>
  );
}

export default Home;
