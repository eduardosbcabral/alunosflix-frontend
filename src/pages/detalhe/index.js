import React, { useState, useEffect } from 'react';

import PageDefault from '../../components/PageDefault';
import ProjectDetail from '../../components/ProjectDetail';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const URL = 'http://localhost:51770/projects/get';

function getId(props) {
    return props.match.params.id;
  }

function DetalheProjeto(props) {

    const [project, setProject] = useState({});

    useEffect(() => {
		let id = getId(props);
        fetchData(id);
    }, []);

    const fetchData = async(id) => {
        const response = await fetch(`${URL}?id=${id}`);
        if(response.ok) {
            const json = await response.json();
            setProject(json);
        }
    }

    return (
        <div style={{background: "#141414"}}>
            <Menu />
                {project && (
                    <ProjectDetail 
                        projectUrl={project.url}
                        projectAuthor={project.author}
                        projectLikes={project.likes}
                        projectAuthorAvatar={project.authorAvatar}
                        projectId={project.id}
                        title={project.author}
                    />
                )}
            <Footer />
        </div>
    )
}

export default DetalheProjeto;