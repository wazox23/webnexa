"use client";
import { useState, useEffect } from 'react';
import './header.scss';

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY >= 75)
		}

		handleScroll()

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

    return (
        <header className={scrolled ? 'header__base header__base--scrolled' : 'header__base'}>
            <div className='header__wrapper'>
                <div className='header__logoContainer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" aria-hidden="true"><g fill="#000" stroke="#000"><path d="M1 1h10v10H1zM13 1h10v10H13zM1 13h10v10H1z"/></g></svg>
                    <span className='header__logoText'>WEBNEXA</span>
                </div>
                <div className='header__subText'>
                    <span className='h5 color--primary'>BECAUSE YOUR WEB DESERVES IT</span>
                </div>
                <div className='header__ctaContainer'>
                    <button className='btn'>Contact us</button>
                </div>
            </div>
        </header>
    )
}

export default Header;