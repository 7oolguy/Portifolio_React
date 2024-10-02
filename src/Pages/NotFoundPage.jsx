import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return <>
        <div className="error-page">
            <h1>404 Page Not found</h1>
            <Link to="/" className="error-back">Go to the Home Page</Link>    
        </div>
    </>;
}