import './HeroSection.css'
import { useRef, useEffect } from 'react';

function HeroSection() {
    let count;
    const canvasRef = useRef(null);
    const mainRef = useRef(null);
    const dots = [];

    useEffect(() => {
        const displayDots = () => {
            dots.forEach(dot => {
                ctx.fillStyle = "#FFFFFF";
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
                ctx.fill();
            });
        }
        const handleMouseMove = (e) => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
            count=0;
            displayDots();

            dots.forEach(dot => {
                let dist = Math.hypot(e.clientX - dot.x, dot.y - (e.clientY-100));
                if (dist < 150 && count<5) {
                    ctx.strokeStyle = "#FFFFFF",
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(dot.x, dot.y);
                    ctx.lineTo(e.clientX, e.clientY-100);
                    ctx.stroke();
                    count+=1;
                }
            })
        }
        const handleMouseOut=()=>{
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
            displayDots();
        }

        const hero = mainRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        for (let i = 0; i < 55; i++) {
            dots.push({
                x: Math.random() * canvas.offsetWidth,
                y: Math.random() * canvas.offsetHeight,
                r: Math.random() * 4 + 4
            })
        }
        displayDots();

        hero.addEventListener("mousemove", handleMouseMove);
        hero.addEventListener("mouseout",handleMouseOut);

        return () => {
            hero.removeEventListener("mousemove", handleMouseMove);
        };

    });





    return (
        <div className="hero_main" id='home' ref={mainRef}>
            <h2>Hi, I'm</h2>
            <h1>BATMAN</h1>
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
            <canvas id="spoidaman" ref={canvasRef}></canvas>
        </div>
    );
}

export default HeroSection;