import "./OneExperience.css"

export default function OneExperience(props){
    return (
        <div className="one-experience-box">
            <div className="one-experience-intro">
                <div>
                    <h2 className="one-experience-job-title">{props.experience.title} at <a href={props.experience.link} target="_blank">{props.experience.Company}</a></h2>
                </div>
                <div>
                    <img src={props.experience.logo} alt={props.experience.logo} className="one-experience-logo"/>
                </div>
            </div>
            <div>
                <ol className="one-experience-ol">
                    {props.experience.description.map(description => <li>{description}</li>)}
                </ol>
            </div>
        </div>
    );
}