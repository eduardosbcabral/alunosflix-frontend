import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import CarouselProjects from '../../components/CarouselProjects';

const URL = 'http://localhost:51770/projects/list-all';

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
    <div style={{background: "#141414"}}>
      <Menu />
      <CarouselProjects
				title={'Resultados para: ' + getSearchString(props) }
				projects={projects}
			/>
			<Footer />
    </ div>
  );
}

export default Pesquisa;
