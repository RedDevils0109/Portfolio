import "./Skill.css"; // Import CSS file if needed

function Skill() {
    return (
        <section className="services" id="services">
            <h2 className="heading">Skill</h2>
            <div className="services-container">
                <div className="service-box">
                    <div className="service-info">
                        <h4>Front End</h4>
                        <p>
                            <ul className="service-list">
                                <li>Javascript <i className='bx bxl-javascript'></i></li>
                                <li>TypeScript <i className='bx bxl-typescript'></i></li>
                                <li>ReactJs <i className='bx bxl-react'></i></li>
                                <li>Tailwind <i className='bx bxl-tailwind-css'></i></li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-info">
                        <h4>Back End</h4>
                        <p>
                            <ul className="service-list">
                                <li>Node Js <i className='bx bxl-nodejs'></i></li>
                                <li>Java <i className='bx bxl-java'></i></li>
                                <li>Spring boot <i className='bx bxl-spring-boot'></i></li>
                                <li>APIs/Microservice <i className="fa-solid fa-server"></i></li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-info">
                        <h4>Database</h4>
                        <p>
                            <ul className="service-list">
                                <li>MySQL <i className="fa-solid fa-database"></i></li>
                                <li>PostgresSQL <i className='bx bxl-postgresql'></i></li>
                                <li>AWS </li>
                                <li>MongoDB <i className='bx bxl-mongodb'></i></li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="service-box">
                    <div className="service-info">
                        <h4>Operation</h4>
                        <p>
                            <ul className="service-list">
                                <li>Docker <i className='bx bxl-docker'></i></li>
                                <li>Kubernet <i className='bx bxl-kubernetes'></i></li>
                                <li>GitHub <i className='bx bxl-git'></i></li>
                                <li>Jenkins <i className="fa-brands fa-jenkins"></i></li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;
