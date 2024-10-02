import Navbar from "./Navbar";
import ContactButton from "./ContactButton";

export default function Header(){
    return <>
        <div className="header">
            <h1 className="logo">YSS</h1>
            <Navbar />
            <ContactButton />
        </div>
    </>;
}