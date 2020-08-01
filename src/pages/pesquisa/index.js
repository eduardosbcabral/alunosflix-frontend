import React, { useState, useEffect } from 'react';

import PageDefault from '../../components/PageDefault';
import ProjectList from '../../components/ProjectList';

const URL = 'https://alunosflix.appspot.com/projects/list-all';

function getSearchString(props) {
  return props.match.params.searchString;
}

function Pesquisa(props) {
	
  const [projects, setProjects] = useState([]);

  useEffect(() => {
		let search = getSearchString(props);
    fetchData(search);
  }, []);

  const fetchData = async(search) => {
		const response = await fetch(search.length > 0 ? `${URL}?search=${search}` : URL);
		if(response.ok) {
			const json = await response.json();
			setProjects(json);
		}
  }

  return (
    <PageDefault>
      <ProjectList
        projects={projects}
        title={'Exibindo resultados para: ' + getSearchString(props)}
      />
    </PageDefault>
  );
}

export default Pesquisa;
