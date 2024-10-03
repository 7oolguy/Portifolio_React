import '../index.css'

import Header from '../Components/Header';
import Typing from '../Components/Typing';
import QuickAboutMe from '../Components/QuickAboutMe';
import ContactButton from '../Components/ContactButton';

export default function HomePage() {
    return <>
        <Header />
        <Typing />
        <QuickAboutMe />
        <div className='ctt-btn-ab-me'>
            <ContactButton />     
        </div>
        
    </>
}