import React from "react";
import './experience.css'

const Experience = () => {
    return (
        <div className="exp">
            <h1>Experience</h1> 
            <h2>FPT Information System - AI Intern</h2>
            <p>June 2023 - September 2023</p>
            <p>Working at FPT Information System (FIS) was an wonderful
                experience for me. Not only I had the chance to meet amazing 
                developers, I also learned a lot from working with them and 
                had a great time working on two projects: Hoan My and DSToolKit.</p>
            <div className="projs">
                <h3>Hoan My project</h3>
                <ul>
                    <li>Developed a methodology to utilize image processing 
                        techniques in hospitals for reducing queue time.
                    </li>

                    <li>Research and collect data from the internet sources(like 
                        Kaggle or HuggingFace) to build a baseline model.
                    </li>

                    <li>Presented the baseline model and the methodology to
                        project managers.
                    </li>
                    <li></li>
                </ul>
                <h3>DSToolKit</h3>
                <ul>
                    <li>Developed a toolkit that can preprocess, detect feature, 
                        build model, and evaluate for data scientists.
                    </li>

                    <li>Utilize Apache Airflow to identify and resolve bugs in the 
                        toolkit.
                    </li>

                    <li>Tested the toolkit to check its functionality and 
                        effectiveness for different datasets.
                    </li>

                    <li>Used Angular framework to detect frontend bugs, and
                        improve the toolkit's user interface.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Experience;