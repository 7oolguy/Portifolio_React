import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects'},
    ];

    return (
        <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '10px'}}>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path} className={({isActive}) => {
                            return isActive ? 'active-navlink' : 'deactive-navlink';
                        }}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}