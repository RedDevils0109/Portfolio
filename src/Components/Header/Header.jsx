import "./Header.css"
function Header() {
    return (
        <header className="header">
            <a href="#home" className="logo">Ho <span>Kha</span></a>
            <a href="#menu" className='bx bx-menu' id="menu-icon"></a>
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#services">Skill</a>
                <a href="#project">Project</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}
export default Header
