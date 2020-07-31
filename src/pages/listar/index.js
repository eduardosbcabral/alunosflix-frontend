import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu'
import CarouselProjects from '../../components/CarouselProjects';

const URL = 'https://alunosflix.appspot.com/projects/list-grouped';

function Listar() {

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
      <div class="lista-projetos-container">
        {projects.map((project, index) => {
          return (
            <CarouselProjects
              key={index}
              title={project.alphabet}
              projects={project.subList}
            />
          );
        })}
      </div>
    </ div>
  );
}

export default Listar;
