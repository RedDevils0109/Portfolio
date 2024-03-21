import { useEffect } from 'react';

function ScrollBarFunc() {
    useEffect(() => {
        const handleScroll = () => {
            const menuIcon = document.querySelector('#menu-icon');
            const navbar = document.querySelector('.navbar');
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.header .navbar a');

            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
                    });
                }
            });
        };

        const handleClick = () => {
            const menuIcon = document.querySelector('#menu-icon');
            const navbar = document.querySelector('.navbar');

            // Toggle the menu icon class
            menuIcon.classList.toggle('bx-menu-alt-right');
            menuIcon.classList.toggle('bx-menu');

            // Toggle the display property of the navbar
            navbar.style.display = navbar.style.display === 'none' || navbar.style.display === '' ? 'block' : 'none';
        };

        // Add event listeners
        document.querySelector('#menu-icon').addEventListener('click', handleClick);
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listeners on component unmount
        return () => {
            document.querySelector('#menu-icon').removeEventListener('click', handleClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    // Note: The useEffect hook requires a return statement, so you could return null here if needed
    return null;
}

export default ScrollBarFunc;
