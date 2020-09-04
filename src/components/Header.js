import React from 'react';
import MobileNav from '../components/MobileNav'
const Header = ({isMenuClicked, handleMenuClick}) => {
    return (
        <header>
                <div id="logo">
                    <img src={require("../images/logo.png")} alt=""/>
                </div>
                <nav data-aos="fade-down">
                    <a href="/product">Product</a>
                    <a href="/solution">Solution</a>
                    <a href='/pricing'>Pricing</a>
                    <a href="/stories">Customer Stories</a>
                    <a href="/resources">Resources</a>
                </nav>
                <div className="call-to-action">
                    <button className="purple">Request A Demo</button>
                    <div className="join-icon">
                        <i className="fas fa-sign-in-alt"></i>
                    </div>
                </div>
                <div id="mobile-nav" data-aos="fade-in">
                    <div id="menu-icon" onClick={handleMenuClick}>
                        <div className="icon-line"></div>
                        <div className="icon-line"></div>
                        <div className="icon-line"></div>
                    </div>
                    {isMenuClicked? 
                    <MobileNav/>
                    : null    
                    }
                </div>
        </header>
    );
};

export default Header;