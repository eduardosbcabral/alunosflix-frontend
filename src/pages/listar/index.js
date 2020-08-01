import React, { useState, useEffect } from 'react';

import PageDefault from '../../components/PageDefault';
import ProjectList from '../../components/ProjectList';

const URL = 'https://alunosflix.appspot.com/projects/list-top';

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
    <PageDefault>
      <ProjectList
        projects={projects}
        title="TOP PROJETOS"
      />
    </PageDefault>
  );
}

export default Listar;
