import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
    const projects = [{
        title: 'Vehicle Builder',
        githublink: 'https://github.com/karinuhgarcia/vehiclebuilder',
        image: "./imgs/vehiclebuilder.jpg",
        deploylink: 'https://github.com/karinuhgarcia/vehiclebuilder'
    },
    {
        title: 'ReadMe Generator',
        githublink: 'https://github.com/karinuhgarcia/readme-generator',
        image: "./imgs/readmegenerator.jpg",
        deploylink: '/Users/karinagarcia/Desktop/bootcamp/assignments/challenges/challenge7/24.12.04 Challenge 7.mp4'
    },
    {
        title: 'The Daily Drip',
        githublink: 'https://github.com/Gavin-Scot-Stockwell/The-Daily-Drip',
        image: './imgs/dailydrip.jpg',
        deploylink: 'https://the-daily-drip.onrender.com/'
    },
    {
        title: 'Book Beacon',
        githublink: 'https://github.com/aelias-thepacer/book_recommendation_full_stack_project',
        image: './imgs/bookbeacon.jpg',
        deploylink: 'https://book-recommendation-full-stack-project.onrender.com/'
    },
    {
        title: 'Weather Dashboard',
        githublink: 'https://github.com/karinuhgarcia/weatherdashboard',
        image: "./imgs/weatherdashboard.png",
        deploylink: 'https://weatherdashboard-5cat.onrender.com/'
    },
    {
        title: 'Employee Tracker',
        githublink: 'https://github.com/karinuhgarcia/employeetracker',
        image: "./imgs/employeetracker.jpg",
        deploylink: 'https://app.screencastify.com/v3/watch/epvpwpnDYfmlcyF9WMw4'
    },
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
