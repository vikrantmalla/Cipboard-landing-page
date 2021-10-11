import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer_left">
                    <img src="images/logo.svg" alt="footer_logo" />
                    <div className="footer_menu">
                        <ul className="footer_option">
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <ul className="footer_option">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Press Kit</a></li>
                        </ul>
                        <ul className="footer_option">
                            <li><a href="#">Install Guide</a></li>
                        </ul>
                    </div>
                </div>

                <div className="social_media">
                    <a href="#"><img src="images/icon-facebook.svg" /></a>
                    <a href="#"><img src="images/icon-twitter.svg" /></a>
                    <a href="#"><img src="images/icon-instagram.svg" /></a>
                </div>
            </footer>
        </>
    )
}

export default Footer
