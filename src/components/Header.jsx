import React from 'react';
import './Header.css'

export default function Header() {
    return (
        <header>
            <div>Header</div>
            <nav>
                <a href='#aboutme'>About Me</a>
                <a href='#portfolioSection'>Portfolio</a>
                <a href="#contactSection">Contact</a>
                <a href="#resumeSection">Resume</a>
            </nav>
        </header>
    )
}
