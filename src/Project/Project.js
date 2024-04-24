import "./Project.css"
import OneProject from "./OneProject"
import ProjectJson from
 './project.json';
import React, {useState, useEffect} from "react";

export default function Project(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(ProjectJson);
    }, []);

    return (
        <div className="project-box">
            <h1 className="project-title">Projects</h1>
            {projects.map(project => (<OneProject project={project}></OneProject>))}
        </div>
    );
}