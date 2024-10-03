import Card from "./Card";
import InfoContent from "./InfoContent";

export default function QuickAboutMe() {
    return <>
        <Card><InfoContent /></Card>
        <div className="info-grid">
            <div className="content-grid">
                <div className="skills card">
                    <h2>Skills</h2>
                    <div className="list-skill">
                        <h3>Languages:</h3>
                        <ul>
                            <li>Html & Css</li>
                            <li>Javascript</li>
                            <li>C#</li>
                            <li>Java</li>
                        </ul>
                        <h3>Frameworks:</h3>
                        <ul>
                            <li>React</li>
                            <li>Angular</li>
                            <li>SpringBoot</li>
                            <li>.NET</li>
                        </ul>
                        <h3>Soft Skills:</h3>
                        <ul>
                            <li>Problem Solver</li>
                            <li>Comunicative</li>
                            <li>Perfectionist</li>
                            <li>Fast Learner</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="total-projects card">
                    <h2>I have over</h2>
                    <h1>10</h1>
                    <h3>projects</h3>
                </div>
                <div className="time-experience card">
                    <h1>2</h1>
                    <h3>years of experience</h3>
                </div>
            </div>
        </div>
    </>
}