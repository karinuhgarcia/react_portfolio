import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
    const projects = [{
        title: 'project title',
        githublink: 'link.link',
        image: "https://picsum.photos/200",
        deploylink: 'deploy.link'
    },
    {
        title: 'project title',
        githublink: 'link.link',
        image: "https://picsum.photos/200",
        deploylink: 'deploy.link'
    },
    {
        title: 'project title',
        githublink: 'link.link',
        image: "https://picsum.photos/200",
        deploylink: 'deploy.link'
    },
    {
        title: 'project title',
        githublink: 'link.link',
        image: "https://picsum.photos/200",
        deploylink: 'deploy.link'
    },
    {
        title: 'project title',
        githublink: 'link.link',
        image: "https://picsum.photos/200",
        deploylink: 'deploy.link'
    }
    ];
    return (
        <section id="portfolioSection">
            <h2 className="porfolio">PORTFOLIO</h2>
            <div id='portfolioList'>
                {projects.map((project, index) => (
                    <div className='projectContainer' key={index}>
                        <img src={project.image} className='portfolioImg' />
                        <div className='projectLinks'>
                            <a href={project.deploylink}>{project.title}</a>
                            <a href={project.githublink}>Github Repository</a>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    )
}
