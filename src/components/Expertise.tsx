import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const labelsFirst = [
    "TypeScript",
    "JavaScript",
    "HTML5",
    "Angular",
    "React",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Laravel",
    "MySQL",
    "MongoDB",
    "Mongoose",
    "TypeORM",
    "Docker",
    "Postman",
    "Python",
    "Git",
    "GitHub",
];

const labelsSecond = [
    "PyTorch",
    "SNNTorch",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Hugging Face",
    "Forward-Forward Algorithm",
    "RSTDP",
    "CNN",
    "SNN",
    "NLP",
    "Image Processing",
    "Custom Training Pipelines",
    "Energy-Efficient Deep Learning"
];

const labelsThird = [
    "Python",
    "Java",
    "OOP",
    "Data Structures",
    "Algorithms",
    "Programming Fundamentals"
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have hands-on experience building scalable web applications using modern frameworks like Angular, Laravel, and the MERN stack (React, Express.js, Node.js, MongoDB). I'm proficient in designing robust backend systems with MySQL, MongoDB, and ORM tools, and have used Docker extensively for containerization and deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>AI Research and Machine Learning</h3>
                    <p>I have hands-on research experience in implementing and optimizing neural networks, with a focus on Spiking Neural Networks (SNNs) for natural language processing tasks. My thesis involved enhancing SNN-based NLP models using the Forward-Forward algorithm and Reward-Modulated STDP (RSTDP) to achieve improved energy efficiency. I worked extensively with PyTorch, SNNTorch, and custom training loops to simulate biologically plausible learning mechanisms. My skill set includes building and experimenting with various types of neural networks, including CNNs, SNNs, and hybrid models—for tasks in image processing and natural language processing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Specialized Topics:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Teaching & Instruction</h3>
                    <p>I’ve worked as a programming instructor for both Python and Java, helping students understand fundamental and advanced concepts in software development and programming, including object-oriented programming, data structures, algorithms, and problem-solving.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Topics Taught:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;