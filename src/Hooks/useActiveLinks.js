import { useEffect } from 'react';

const useActiveLink = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        const updateActiveLink = () => {
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 50) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === currentSection) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', updateActiveLink);

        return () => {
            window.removeEventListener('scroll', updateActiveLink);
        };
    }, []);
};

export default useActiveLink;
