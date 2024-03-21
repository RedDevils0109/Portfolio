import './About.css'
function About() {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3><span>Software Engineer</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab veniam blanditiis quae eveniet
                    quia est? Modi nam minus doloribus. Nulla nostrum reprehenderit modi error itaque cumque sapiente
                    tempora at?</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="about-img">
                <img src="/ethereum-eth-logo.png" alt="Logo" />
            </div>
        </section>
    );
}

export default About;
