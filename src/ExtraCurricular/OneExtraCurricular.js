import "./OneExtraCurricular.css"

export default function OneExtraCurricular(props){
    return (
        <div className="one-extra-curricular-box">
            <div className="one-extra-curricular-intro">
                <div>
                    <h2 className="one-extra-curricular-title">{props.extra_curricular.title} at <a href={props.extra_curricular.link} target="_blank">{props.extra_curricular.organization}</a></h2>
                </div>
                <div>
                    <img src={props.extra_curricular.logo} alt={props.extra_curricular.logo} className="one-extra-curricular-logo"/>
                </div>
            </div>
            <div>
                <ol className="one-extra-curricular-ol">
                    {props.extra_curricular.description.map(description => <li>{description}</li>)}
                </ol>
            </div>
        </div>
    );
}