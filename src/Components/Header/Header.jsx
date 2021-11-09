import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import { useEffect, useState } from 'react';

import './header.css';

const MOBILE_SIZE = 423;

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_SIZE);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth <= MOBILE_SIZE);
            console.log(window.innerWidth);
        })
    }, [isMobile]);

    const handleStateChange = state => setMenuOpen(state.isOpen);
    const closeMenu = () => setMenuOpen(false);
  
    return (
        <div className="header">
            {isMobile &&
                <Menu 
                    onStateChange={(state) => handleStateChange(state)}
                    isOpen={menuOpen}
                >
                    <Link onClick={() => closeMenu()} to="/">Home</Link>
                    <Link onClick={() => closeMenu()} to="/guide">Guide</Link>
                    <Link onClick={() => closeMenu()} to="/about">About</Link>
                    <Link onClick={() => closeMenu()} to="/resources">Resources</Link>
                </Menu>
            }
            <h1 className="header-heading">Food Cycle</h1>
            {!isMobile &&
                <div className="header-menu">
                    <Link className="header-link" to="/">Home</Link>
                    <Link className="header-link" to="/guide">Guide</Link>
                    <Link className="header-link" to="/about">About</Link>
                    <Link className="header-link" to="/resources">Resources</Link>
                </div>
            }
        </div>

    )
}

export default Header;