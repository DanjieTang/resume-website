import "./ExtraCurricular.css"
import OneExtraCurricular from "./OneExtraCurricular"
import ExtraCurricularJson from
 './extra_curricular.json';
import React, {useState, useEffect} from "react";

export default function ExtraCurricular(){
    const [extra_curriculars, setExtraCurricular] = useState([]);

    useEffect(() => {
        setExtraCurricular(ExtraCurricularJson);
    }, []);

    return (
        <div className="extra-curricular-box">
            <h1 className="extra-curricular-title">Extra-curricular</h1>
            {extra_curriculars.map(extra_curricular => (<OneExtraCurricular extra_curricular={extra_curricular}></OneExtraCurricular>))}
        </div>
    )
}