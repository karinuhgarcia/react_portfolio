import React from 'react'
import './Resume.css'

export default function Resume() {
    return (
        <section id='resumeSection'>
            <h2 id='resumeTitle'>Resume</h2>
            <h4 id='download'>Download <a href=''>Resume</a></h4>
            <h3>Front End Proficiencies</h3>
            <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
                <li>Typescript</li>
            </ol>
            <h3>Back End Proficiencies</h3>
            <ol>
                <li>Node.js</li>
                <li>Mongoose</li>
                <li>Express</li>
                <li>SQL</li>
                <li>NoSQL</li>
            </ol>



        </section>
    )
}
