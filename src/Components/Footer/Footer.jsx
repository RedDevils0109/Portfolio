import "./Footer.css"; // Import CSS file if needed

function Footer() {
    return (
        <footer className="footer">
            <div className="social">
                <a href="https://www.linkedin.com/in/kha-h%E1%BB%93-7b2b9b244/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
                <a href="https://www.facebook.com/profile.php?id=100027744552694" target="_blank"><i className='bx bxl-facebook-circle'></i></a>
                <a href="https://github.com/RedDevils0109" target="_blank"><i className='bx bxl-github'></i></a>
                <a href="https://www.instagram.com/__hokha__/" target="_blank"><i className='bx bxl-instagram'></i></a>

            </div>
            <ul className="list">
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#services">Skill</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#project">Project</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
            <p className="copyright">
                &copy; Ho Kha. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
