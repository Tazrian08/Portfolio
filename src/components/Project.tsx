import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.jpg';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://digitalcollectioncamera.com" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://digitalcollectioncamera.com" target="_blank" rel="noreferrer"><h2>Digital Collection</h2></a>
                <p>An e-commerce platform for professional camera equipment, built with the MERN stack. Features include secure authentication, shopping cart & checkout flow, product management dashboard, and responsive UI. Deployed on a Hostinger VPS with Nginx & PM2, and currently being used for real business operations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Tazrian08/Freedom-Within" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Tazrian08/Freedom-Within" target="_blank" rel="noreferrer"><h2>Freedom Within</h2></a>
                <p>A Therapist Office Management System. It enables Thrapists to maintain their own profile and manage their appointments through the website. Patients can make appointments using the website as well. Made using: Angular, Laravel, MySQL. A video demo can be found in the Repository README</p>
            </div>
            <div className="project">
                <a href="https://github.com/Tazrian08/471-Project" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Tazrian08/471-Project" target="_blank" rel="noreferrer"><h2>Wanderlust Travel Agency</h2></a>
                <p>A travel agency dedicated to ensure quality service and competetive travel packages. Includes details about travel packages, destinations, tourist attractions etc. Made using: Angular, Laravel and MySQL. A video demo has been included in the Repository README</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Fabric Flow</h2></a>
                <p>A Fabric Shop Management system. A portal used by the fabric shob employees to maintain orders, expenses and inventory. Made using: MERN stack (MongoDB, ExpressJs, React, Nextjs)</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Social Media Site</h2></a>
                <p>Social Media site where people can sign up, add friends, create posts and maintain their personal networks. The site includes a fully functional AI chatbot powered by LLAMA-2-7B-Chat-GGUF. Made using: Angular, Laravel, MySQL. Site demo can be found as screenshots in the repository README</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>The Frustration Game</h2></a>
                <p>A small scale replication of the famous flash game named "The Hardest Game". Made using Python and OpenGL</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>Assembly Banking Management System</h2></a>
                <p>A small scale Bank Management system in terminal. Provides functionalities for users to login, withdraw/depoist cash, apply/pay loans and view transaction history. Made entirely using MASM Assembly (x86 Architecture)</p>
            </div>
            
        </div>
        <h1>Research Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Tazrian08/Biologically-Plausible-Learning-for-NLP-Using-Spiking-Neural" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Tazrian08/Biologically-Plausible-Learning-for-NLP-Using-Spiking-Neural" target="_blank" rel="noreferrer"><h2>Biologically Plausible Learner for Natual Language Processing (NLP) using Spiking Neural Network (SNN)</h2></a>
                <p>Theorized and implemented a novel decentralized Spiking Neural Network using Forward-Forward algorithm and reward modulation for energy-efficient Natual Language Processing.</p>
            </div>
            
        </div>
    </div>
    
    );
}

export default Project;

