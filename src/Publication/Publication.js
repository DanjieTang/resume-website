import "./Publication.css"
import OnePublication from "./OnePublication";
import PublicationJson from
 './publication.json';
 import React, {useState, useEffect} from "react";

export default function Publication(){
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        setPublications(PublicationJson);
    }, []);

    return (
        <div className="publication-box">
            <h1 className="publication-title">Publication</h1>
            {publications.map(publication => (<OnePublication publication={publication}></OnePublication>))}
        </div>
    );
}