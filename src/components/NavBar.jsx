import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <nav className="nav-bar">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>
            {isMenuOpen && (
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    
                </ul>
            )}
        </nav>
    );
}

export default NavBar;