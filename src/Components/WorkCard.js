import React from 'react';
import './WorkCard.css'

import { NavLink } from 'react-router-dom';



const WorkCard = (props) => {
    return (
        // <div className='work-container'>
        //     <h1 className='project-heading'>Projects</h1>
        //     <div className="project-container">
        //         <div className="project-card">
        //             <img src={pro1} alt="" />
        //             <h2 className='project-title'>Project Title</h2>
        //             <div className="pro-details">
        //                 <p>This is text</p>
        //                 <div className="pro-btns">
        //                     <NavLink to="url.com" className="btn">view</NavLink>
        //                     <NavLink to="url.com" className="btn">source </NavLink>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="project-card">
            <img src={props.imgsrc} alt="image" />
            <h2 className='project-title'>{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">view</NavLink>
                    <NavLink to={"url.com"} className="btn">source </NavLink>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;