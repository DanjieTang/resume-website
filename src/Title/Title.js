import "./Title.css";

export default function Title(){
    return (
        <div className="container">
            <div className="title">
                <h1>Danjie Tang</h1>
                <h3>Third year Computer Engineering student, U of T</h3>
            </div>
            <div className="image-box">
                <img src="resume-image.jpeg" className="image" alt="Danjie's Resume" />
            </div>
        </div>
    );
}