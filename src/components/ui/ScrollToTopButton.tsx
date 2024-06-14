import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button 
            className={`scroll-to-top ${isVisible ? 'show' : ''}`} 
            onClick={scrollToTop}>
            <div className='arrow-container'>
                <div className='arrow-up'></div>
                <div className='arrow-down'></div>
            </div>
        </button>
    );
};

export default ScrollToTopButton;
