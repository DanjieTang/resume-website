import "./Footer.css"

export default function Footer(){
    return(
        <div className="footer-box">
            <h2>Contact Info:</h2>
            <ul>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/danjie-tang/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/danjie-tang/</a></li>
                <li>Email: <a href="mailto:danjie.tang@outlook.com">
                    danjie.tang@outlook.com
                </a></li>
                <li>Phone: +1 (647) 824-0420</li>
                <li>GitHub: <a href="https://github.com/DanjieTang" target="_blank" rel="noreferrer">https://github.com/DanjieTang</a></li>
            </ul>
            <p>&copy; {new Date().getFullYear()} Danjie Tang</p>
        </div>
    );
}