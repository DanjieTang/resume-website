import "./OnePublication.css"

export default function OnePublication(props){
    return (
        <div className="one-publication-box">
            <div className="one-publication-intro">
                <h2 className="one-publication-title">{props.publication.title} at <a href={props.publication.PublicationWebsite} target="_blank" rel="noreferrer">{props.publication.PublicationLocation}</a></h2>
            </div>
            <div>
                <ol className="one-publication-ol">
                    {props.publication.description.map(description => <li>{description}</li>)}
                </ol>
            </div>
        </div>
    );
}