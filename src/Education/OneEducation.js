import "./OneEducation.css"

export default function OneEducation(props){
    return (
        <div className="one-education-box">
            <div className="one-education-intro">
                <div>
                    <h2 className="one-education-job-title">{props.education.title} at <a href={props.education.link} target="_blank" rel="noreferrer">{props.education.school}</a></h2>
                </div>
                <div>
                    <img src={props.education.logo} alt={props.education.logo} className="one-education-logo"/>
                </div>
            </div>
            <div>
                <ol className="one-education-ol">
                    {props.education.description.map(description => <li>{description}</li>)}
                </ol>
            </div>
        </div>
    );
}