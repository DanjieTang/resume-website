import "./Education.css"
import OneEducation from "./OneEducation"
import EducationJson from
 './education.json';
import React, {useState, useEffect} from "react";

export default function Education(){
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        setEducations(EducationJson);
    }, []);

    return(
        <div className="education-box">
            <h1 className="education-title">Education</h1>
            {educations.map(education => (<OneEducation education={education}></OneEducation>))}
        </div>
    );
}