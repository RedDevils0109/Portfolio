import "./Home.css"; // Import CSS file if needed

function Home() {
    return (
        <>
            <section className="home" id="home">
                <div className="home-img">
                    {/* Ensure the image is properly served from the public directory */}
                    <img src="/ethereum-eth-logo.png" alt="logo"></img>
                </div>
                <div className="home-content">
                    <h1>It's <span>Ho Kha</span></h1>
                    <h3 className="text-animation">I'm a <span></span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae atque accusantium, ipsum, nesciunt vero
                        rerum animi et blanditiis laudantium officiis eum asperiores hic dolorum repudiandae nulla deserunt!
                        Soluta, perspiciatis error!</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/kha-h%E1%BB%93-7b2b9b244/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100027744552694" target="_blank"><i className='bx bxl-facebook-circle'></i></a>
                        <a href="https://github.com/RedDevils0109" target="_blank"><i className='bx bxl-github'></i></a>
                        <a href="https://www.instagram.com/__hokha__/" target="_blank"><i className='bx bxl-instagram'></i></a>
                    </div>
                    <a href="#contact" className="btn">Hire me</a>
                </div>
            </section>
        </>
    );
}

export default Home;
