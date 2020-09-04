import React from 'react';

const MobileNav = () => {
    return (
            <div id="mobile-items">
                <a href="/product">Product</a>
                <a href="/solution">Solution</a>
                <a href="/pricing">Pricing</a>
                <a href="stories">Customer Stories</a>
                <a href="resources">Resources</a>
                <a href="/demo" className="purple">Request a Demo</a>
                <a href="/login">
                    <i className="fas fa-sign-in-alt"></i>
                </a>
            </div>
    );
};

export default MobileNav;