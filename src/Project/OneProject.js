import "./OneProject.css"

export default function OneProject(props){
    return (
        <div className="one-project-box">
            <div className="one-project-intro">
                <div>
                    <h2 className="one-project-job-title"><a href={props.project.link} target="_blank">{props.project.title}</a></h2>
                </div>
            </div>
            <div>
                <ol className="one-project-ol">
                    {props.project.description.map(description => <li>{description}</li>)}
                </ol>
            </div>
        </div>
    );
}