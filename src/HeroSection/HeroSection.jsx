import './HeroSection.css'

function HeroSection() {


    return (
        <div className="hero_main light-bg">
            <h2>Hi, I'm</h2>
            <h1>From INDIA</h1>
            <div className="social-icons">
                <div className="social_icon" id='green'>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
                <div className="social_icon" id='grad'>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="social_icon" id='navy'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
                <div className="social_icon" id='blue'>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div className="social_icon" id='navy'>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="social_icon" id='red'>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-pinterest"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;