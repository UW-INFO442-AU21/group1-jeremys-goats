import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import { useEffect, useState } from 'react';

import './header.css';

const MOBILE_SIZE = 423;

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth <= MOBILE_SIZE);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth <= MOBILE_SIZE);
            console.log(window.innerWidth);
        })
    }, [isMobile]);
  
    return (
        <div className="header">
            <h1 className="headerHeading">Food Cycle</h1>
            {isMobile &&
                <Menu right >
                    <Link to="/">Home</Link>
                    <Link to="/guide">Guide</Link>
                    <Link to="/about">About</Link>
                    <Link to="/resources">Resources</Link>
                </Menu>
            }
            {!isMobile &&
                
                <div className="headerMenu">
                    <Link className="headerLink" to="/">Home</Link>
                    <Link className="headerLink" to="/guide">Guide</Link>
                    <Link className="headerLink" to="/about">About</Link>
                    <Link className="headerLink" to="/resources">Resources</Link>
                </div>
            }
        </div>

    )
}

export default Header;