import React from 'react';
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    projectUrl,
    websiteUrl
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                <a href={websiteUrl} className='project-external-link'>
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                </a>
            </div>

            <div className='project-details-container'>
                <a href={projectUrl}  className='project-external-link'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
