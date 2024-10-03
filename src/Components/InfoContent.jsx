import ProfileImageDisplay from "./ProfileImageDisplay";
import profileImage from "../assets/Profile_Picture-removebg.png"
import { Link } from "react-router-dom";

export default function InfoContent() {
    return <>
        <div className="intro-card">
            <ProfileImageDisplay
                src={profileImage}
                alt="Profile Photo" />

            <div className="intro-text-group">
                <h1>Yan Souza Silva</h1>
                <h3>Data Analist & Software Developer</h3>
            </div>
        </div>
        <Link to="/about" className="see-more">+ See More</Link>
    </>
}