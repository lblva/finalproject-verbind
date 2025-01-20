import '../styles/footer.css';

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerInnerContainer'>
                <div className='footerTopContainer'>
                    <div className='footerLeftContainer'>
                        <img src='/logo.png' alt='logo' className='logo'/>
                        <p className='footerText'> </p>
                    </div>
                    <div className='footerRightContainer'>
                        <p className='footerText'>Contact:</p>
                        <p className='footerText'>Email: lola.batchalova@hotmail.com</p>
                        <div className="socialIcons">
                            <a href="https://www.linkedin.com/in/lola-batchalova/" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin-logo.png" alt="LinkedIn" className="socialIcon" />
                            </a>
                            <a href="https://www.facebook.com/lola.batchalova" target="_blank" rel="noopener noreferrer">
                            <img src="/fb-logo.png" alt="Facebook" className="socialIcon" />
                            </a>
                            <a href="https://www.instagram.com/lola.blva/" target="_blank" rel="noopener noreferrer">
                            <img src="/insta-logo.png" alt="Instagram" className="socialIcon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='footerBottomContainer'>
                    <div className='footerLeftContainer'>
                    <p className='footerText'>© 2025 Verbind. All Rights Reserved. </p>
                    </div>
                    <div className='footerRightLegalContainer'>
                    <p className='footerText'>Gebruiksvoorwaarden </p>
                    <p className='footerText'>Privacybeleid </p>
                    <p className='footerText'>Cookies </p>
                    </div>
                </div>
            </div>
        </div>    
                    
    );
};

export default Footer;