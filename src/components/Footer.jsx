import React from 'react';
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer_left">
                    <img src="images/logo.svg" alt="footer_logo" />
                    <div className="footer_menu">
                        <ul className="footer_option">
                            <li>FAQs</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul className="footer_option">
                            <li>Privacy Policy</li>
                            <li>Press Kit</li>
                        </ul>
                        <ul className="footer_option">
                            <li>Install Guide</li>
                        </ul>
                    </div>
                </div>

                <div className="social_media">
                    <img src="images/icon-facebook.svg" alt="facebook" />
                    <img src="images/icon-twitter.svg" alt="facebook" />
                    <img src="images/icon-instagram.svg" alt="facebook" />
                </div>
            </footer>
        </>
    )
}

export default Footer
