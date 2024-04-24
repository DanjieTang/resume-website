import "./Experience.css"
import OneExperience from "./OneExperience"
import ExperienceJson from
 './experience.json';
import React, {useState, useEffect} from "react";

export default function Experience(){
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        setExperiences(ExperienceJson);
    }, []);

    return (
        <div className="experience-box">
            <h1 className="experience-title">Experience</h1>
            {experiences.map(experience => (<OneExperience experience={experience}></OneExperience>))}
        </div>
    );
}